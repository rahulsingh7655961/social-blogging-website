import { Box, makeStyles, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { Link } from 'react-router-dom';

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
    subheading: {
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }

    }
}));

const DetailView = () => {
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    return (
        <Box className={classes.container}>
            <img src={url} className={classes.image} alt="" />

            <Box className={classes.icons}>
                <Link to='/update'><Edit className={classes.icon} color='primary' /></Link>
                <Delete className={classes.icon} color='error' />
            </Box>
            <Typography className={classes.heading}>Title of the Blog</Typography>
            <Box className={classes.subheading}>
                <Typography>Author:<span style={{ fontWeight: '600' }}>Rahul Singh</span></Typography>
                <Typography style={{ marginLeft: 'auto' }}>31 July 2021</Typography>
            </Box>
            <Typography>Hllo voefv vnkefnvkefjd vioewhfjnr votgurngjre fuheirfjef vuirnvjebvjebv fvrnvjnejv e vv uivnjvi
                nkjbfkjwnkjwbfijn jcbknlj nivbhckdckjbdkj cbfyee chgecn cygj ugv fevuc cy nucbjc  ubchdbcjw b uwbeklwjnrnbjdn
                bjvbmnvbbbvm vb jnvnf,vkdsj vfjvn,nvbwjvjejbpjnkvkljvbpd  vnvjdfpvnfdk  vndjvpwvobvn vxc dleojfrk v vnvndverofjbvkdf  vn
                vjk v kjldjodvdmvd;ljvdnf
            </Typography>
        </Box>

    )
}
export default DetailView;