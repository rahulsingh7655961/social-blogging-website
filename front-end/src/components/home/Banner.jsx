
import {makeStyles,Box} from '@material-ui/core';

const useStyles = makeStyles({
    image:{
        background: `url${''} center/55% repeat -x #000 `,
        height:"55vh",
        width:"100%"
    }
})

const Banner =()=>{
    const classes = useStyles();
    return( 
        <Box className={classes.image}>
        </Box>
    )
}

export default Banner;