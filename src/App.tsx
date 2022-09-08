import { makeStyles } from '@mui/styles'
import React from 'react';
import './App.css';
import CodeBar from './components/CodeBar/CodeBar';
import Header from './components/Header/Header';
import Site from './components/Site/Site';
import { RootState } from './store';

const useStyles = makeStyles((theme?: any) => ({
  main: {
    flex: '1',
    borderLeft: '2px sokid #333'
  }
}) )

function App() {

  const classes = useStyles()

  return (
    <div className='App' style={{display: 'flex'}}>
      <CodeBar/>
      <div className={classes.main}>
        <Header/>
        <Site/>
      </div>
    </div>
  );
}

export default App;
