import Banner from './Banner';
import Posts from './Posts'
import Category from './Category'

import {Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
    component: {
         marginTop: 50
    }
});

const Home = ()=>{
    const classes = useStyles();
    return(
        <>
        <Banner/>
        <Grid container className={classes.component}>
            <Grid item lg={2} xs={12} sm={2}>
                <Category/>
            </Grid>  
            <Grid container item lg={10} xs={12} sm={10}>
             <Posts/>
            </Grid>  
        </Grid>
        </>
    )
}

export default Home;