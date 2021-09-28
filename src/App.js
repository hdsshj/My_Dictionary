import React from 'react';
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";
import { loadCardFB } from "./redux/modules/cardlist";


import './App.css'





import CardList from './CardList';
import AddCard from './AddCard';
import CardEdit from './CardEdit'
import Style from './style';


function App() {
  const history = useHistory();
  const dispatch = useDispatch();
 
 
//파이어베이스 활성화
  React.useEffect(() => {
    dispatch(loadCardFB());
    
  }, [])



  return (
    <Wrap className="App">
      
      <div style = {{backgroundColor:'#EEE', border:'6px solid #efd3cd', borderRadius:'20px', width :'90vw', margin : '0px auto'}}>
        <h2 style = {{textAlign:'center'}}>MY DICTIONARY</h2>
      </div>
      
      <Container>
        <Route path='/' component = {CardList} exact />
      
      <Route path='/CardEdit/:index' exact>
        <CardEdit />
      </Route>
      <Route path='/AddCard' component = {AddCard} exact />
      </Container>
      <button onClick = {() => {history.push('/AddCard')}}>이거 추가버튼임</button>

  <Route path='/Style' component = {Style} exact />
  <button onClick = {()=>{history.push('/Style')}}>스타일 이동</button>
  

    </Wrap>
  );
}

const Wrap = styled.div`
  /* background-color: #ddd; */
  width: 100vw;
  
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Gamja Flower', cursive;
 

`;


const Img = styled.img`

    width: 100vw;
    height: 100vh;
    
    
`;


const Container = styled.div`
 min-height: 799px;
 overflow-x: hidden;
    overflow-y: auto;
   


`;

export default App;
