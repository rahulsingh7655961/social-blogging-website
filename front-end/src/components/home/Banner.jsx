
import {makeStyles,Box,Typography} from '@material-ui/core';

const useStyles = makeStyles({
    image:{
        background: `url(${'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg'}) center/55% repeat-x #000`,
        width:'100%',
        height: '50vh',
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        '&>*':{
            fontSize:64,
            color:"#FFFFFF",
            lineHeight:1
        } 
    },
    
})

const Banner =()=>{
    const classes = useStyles();
    return( 
        <Box className={classes.image}>
            <Typography>BLOGGING</Typography>
        </Box>
    )
}

export default Banner;