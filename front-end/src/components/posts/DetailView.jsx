import { Box, makeStyles, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getPost } from '../../service/api';
import { deletePost } from '../../service/api';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    icons: {
        float: 'right'
    },
    icon: {
        margin: 5,
        border: '1px solid #878787',
        padding: 5,
        borderRadius: 10
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    author: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }

}));

const DetailView = ({ match }) => {
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const history = useHistory();
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            setPost(data);
        }
        fetchData();
    }, []);

    const deleteBlog = async () => {
        await deletePost(post._id);
        history.push('/');
    }


    return (
        <Box className={classes.container}>
            <img src={url} className={classes.image} alt="post" />

            <Box className={classes.icons}>
                <Link to={`/update/${post._id}`}><Edit className={classes.icon} color='primary' /></Link>
                <Delete onClick={() => deleteBlog()} className={classes.icon} color='error' />
            </Box>

            <Typography className={classes.heading}>{post.title}</Typography>

            <Box className={classes.author}>

                <Link to={`/?username=${post.username}`} className={classes.link}>

                    <Typography>Author:<span style={{ fontWeight: '600' }}>{post.username}</span></Typography>

                </Link>
                <Typography style={{ marginLeft: 'auto' }}>{new Date(post.createdDate).toDateString()}</Typography>

            </Box>
            <Typography>{post.description}</Typography>
        </Box>

    )
}
export default DetailView;