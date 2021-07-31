import React from 'react';
import {Box,makeStyles} from '@material-ui/core';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
//components
import Header from './components/Header';
import Home from './components/home/Home';
import DetailView from './components/posts/DetailView';
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Box style={{marginTop:64}}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/details' component={DetailView}/>
      </Switch>
    </Box>    
    </BrowserRouter>
  );
}

export default App;
