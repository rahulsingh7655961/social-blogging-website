
import { Box, makeStyles, Button, FormControl, InputBase,TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import {useEffect , useState} from 'react';
import { useHistory } from 'react-router-dom';

import {getPost} from '../../service/api';
import {updatePost} from '../../service/api';

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
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        marginTop: 50,
        width: '100%',
        border: 'none',
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }

    }
}));

const initialValues = {
    title:"",
    description:"",
    picture:"",
    username:"Rahul",
    categories:"All",
    createdDate:new Date()

}

const UpdateView = ({match}) => {
    const classes = useStyles(initialValues);
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const history = useHistory();

    const [post,setPost] = useState({});

    useEffect(()=>{
        const fetchData = async()=>{
            let data = await getPost(match.params.id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    },[]);

    const handleChange = (e)=>{
        setPost({...post, [e.target.name]:e.target.value});
    }
    const updateBlog = async() =>{
       await updatePost(match.params.id,post);
       history.push(`/details/${match.params.id}`);
    }
    
    return (
        <Box className={classes.container}>
            <img src={url} alt='banner' className={classes.image} />

            <FormControl className={classes.form}>
                <AddCircle fontsize='large' color='action' />

                <InputBase 
                placeholder='Title' 
                name='title'
                value={post.title} 
                onChange = {(e) => handleChange(e)}
                className={classes.textfield} 
                />
                <Button 
                variant='contained' 
                color="primary"
                onClick={()=>updateBlog()}
                >Update</Button>
            </FormControl>

            <TextareaAutosize
                rowsMin={5}
                placeholder='tell your story......'
                name='description'
                value={post.description}
                onChange = {(e) => handleChange(e)}
                className={classes.textarea}
            />
        </Box>
    );
}
export default UpdateView;