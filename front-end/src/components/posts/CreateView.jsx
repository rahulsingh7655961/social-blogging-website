import { useState } from 'react';
import { Box, makeStyles, Button, FormControl, InputBase,TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

import {useHistory} from 'react-router-dom';
import {createPost} from '../../service/api';

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

const CreateView = () => {
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    const history = useHistory();

    const [post,setPost] = useState(initialValues);

    const handleChange = (e)=>{
        setPost({...post, [e.target.name]:e.target.value});
    }
    const savePost = async() =>{
       await createPost(post);
       history.push('');
    }

    return (
        <Box className={classes.container}>
            <img src={url} alt='banner' className={classes.image} />

            <FormControl className={classes.form}>
                <AddCircle fontsize='large' color='action' />

                <InputBase 
                    placeholder='Title' 
                    className={classes.textfield} 
                    onChange = {(e) => handleChange(e)}
                    name = 'title'
                />
                <Button
                onClick={()=>savePost()} 
                variant='contained' 
                color="primary">Publish</Button>
            </FormControl>

            <TextareaAutosize
                rowsMin={5}
                placeholder='tell your story......'
                className={classes.textarea}
                onChange = {(e) => handleChange(e)}
                name = 'description'
            />
        </Box>
    );
}

export default CreateView;