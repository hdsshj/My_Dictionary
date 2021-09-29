import React from 'react';
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadCardFB } from "./redux/modules/cardlist";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';

import bgimg from './static/bgimg.png'

import './App.css'

import CardList from './CardList';
import AddCard from './AddCard';
import CardEdit from './CardEdit'


function App() {
  const history = useHistory();
  const dispatch = useDispatch();


  //파이어베이스 활성화
  React.useEffect(() => {
    dispatch(loadCardFB());
  }, [])



  return (
    <Wrap className="App">
      <Title >
        <h2 onClick={() => { history.push('/') }}>MY DICTIONARY</h2>
        <IconButton id='iconBtn' onClick={() => { history.push('/AddCard') }}>
          <AddIcon style={{ fontSize: '40px' }} />
        </IconButton>
      </Title>
      <Container className='container'>
        <Route path='/' component={CardList} exact />
        <Route path='/CardEdit/:index' exact>
          <CardEdit />
        </Route>
        <Route path='/AddCard' component={AddCard} exact />
      </Container>
      <Btn>
        <Box sx={{ '& > :not(style)': { m: 1 } }} >
          <Fab color="primary" aria-label="add" onClick={() => { history.push('/AddCard') }}>
            <AddIcon />
          </Fab>
        </Box>
      </Btn>
    </Wrap>
  );
}

const Wrap = styled.div`
  /* background-color: #ddd; */
  background-image: url('${bgimg}');
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Gamja Flower', cursive;

  .container::-webkit-scrollbar{
    display: none;
  }
`;

const Title = styled.div`
  position: relative;
  background-color : #1976D2;
  width: 100vw;
  height: 80px;
  min-height: 80px;
  max-height: 80px;
  margin: 0px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6), 0 6px 4px rgba(0, 0, 0, 0.2);

  h2{
    color: #fff;
    position: absolute;
    margin: 0px;
    top: 12px;
    left: 60px;
    font-size : 40px;
    cursor: pointer;
  }

  #iconBtn {
    position: absolute;
    top: 12px;
    right: 5vw;
    color: #FFF;
  }
`;

const Container = styled.div`
 /* min-height: 799px; */
  overflow-x: hidden;
  overflow-y: auto;
`;

const Btn = styled.div`
  /* background-color: blue; */
  position: absolute;
  border-radius: 30px;
  bottom: 3vh;
  right: 3vw;
  z-index: 5;
`;


export default App;
