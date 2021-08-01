
import { Box, makeStyles, Button, FormControl, InputBase } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

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

const UpdateView = () => {
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    return (
        <Box className={classes.container}>
            <img src={url} alt='banner' className={classes.image} />

            <FormControl className={classes.form}>
                <AddCircle fontsize='large' color='action' />

                <InputBase placeholder='Title' className={classes.textfield} />
                <Button variant='contained' color="primary">Update</Button>
            </FormControl>

            <TextareaAutoSize
                rowsMin={5}
                placeholder='tell your story......'
                className={classes.textarea}
            />
        </Box>
    );
}
export default DefaultView;