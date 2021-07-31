import {Box, makeStyles} from '@material-ui/core';
import {Edit,Delete} from '@material-ui/icons';
const useStyles = makeStyles({
    container:{
        padding:'0 100px'
    },
    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover'
    },
    icon:{
        margin:5,
        border:'1px solid #878787'
    }
});
const DetailView = () =>{
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    return(
        <Box className={classes.container}>
            <img src={url} className={classes.image}/>
            <Box className={classes.icons}>
                <Edit />
                <Delete />
            </Box>
            <Typography>Title of the Blog</Typography>
        </Box>

    )
}
export default DetailView;