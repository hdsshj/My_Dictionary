import React from 'react';
import styled from 'styled-components'
import {Route} from 'react-router-dom'

import CardList from './CardList';
import AddCard from './AddCard';


function App() {
  return (
    <Wrap className="App">
      <div>
      <h2>MY DICTIONARY</h2>
      </div>
      <div>
        <CardList/>
        <button>이거 추가버튼임</button>
      </div>
        <AddCard/>
        
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: #ddd;
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
`;

export default App;
