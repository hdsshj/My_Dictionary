import React from "react";
import styled from 'styled-components'
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';



import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { removeCardFB, removeCard, updateCard, updateCardFB } from "./redux/modules/cardlist";

import img from './static/goodnotes sticker.png'




const CardList = (props) => {


    const card_list = useSelector((state) => state.cardlist.card_list)
    const dispatch = useDispatch()

    const params = useParams();
    const history = useHistory();
    const cardIndex = params.index;

    // console.log(my_lists)
 

    const editDiv = () => {
        history.push("/CardEdit/" + cardIndex);
        console.log(card_list, cardIndex)
    };

    const deleteBtn = () => {

        // dispatch(removeCard(cardIndex));
        console.log(params)
        //파이어베이스 사용시 활성화
        // dispatch(removeCardFB(card_list[cardIndex].id));
        // console.log(card_list[cardIndex].id)

    };

    const stopPropagation = (e) => {
        e.stopPropagation();
        
      };

    return (
        <Wrap>
            {card_list.map((l, idx) => {
                // console.log(l, idx)
                return (
                    <Main key={idx} onClick={() => {history.push("/CardEdit/" + idx)}}>
                        <Img alt="post" src={img} />
                        <DelBtn onClick = {stopPropagation} >
                        <IconButton onClick = {()=>{dispatch(removeCardFB(card_list[idx].id))}}>
                             <DeleteIcon style={{ fontSize: '30px' }} sx = {{color : grey[400]}} />
                          </IconButton>
                                
                            
                        </DelBtn>

                        <Sub1>
                            <h3>단어</h3>
                            <p>{l.word}</p>
                        </Sub1>
                        <Sub2>
                            <h3>설명</h3>
                            <p>{l.desc}</p>
                        </Sub2>
                        <Sub3 >
                            <h3>예시</h3>
                            <p className='ex'>{l.example}</p>
                        </Sub3>
                    </Main>


                );
            })}
        </Wrap>

    );
};

const Wrap = styled.div`
    /* background-color: beige; */
    width: 90vw;
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    

`;

const Main = styled.div`
    background-color: aqua;
    position: relative;
    top: 40px;
    left: 40px;
    width: 300px;
    height: 350px;
    margin: 100px 60px;
    z-index: 1;
    

`;

const Img = styled.img`
    position: absolute;
    top: -80px;
    left: -52px;
    width: 400px;
    height: 500px;
    
    
`;

const Sub1 = styled.div`
    background-color: #dcd8d4;
    position: absolute;
    top: -10px;
    left: 0px;
    width: 290px;
    height: 90px;
    margin: 25px auto;
    border-radius: 20px;
    padding: 5px;
    z-index: 2;
    h3{
        margin: 10px auto 10px 20px;
    }
    p{
        margin: -5px auto 10px 20px;
    }

`;
const Sub2 = styled.div`
    background-color: #dcd8d4;
    position: absolute;
    top: 110px;
    left: 0px;
    width: 290px;
    height: 90px;
    margin: 25px auto;
    border-radius: 20px;
    padding: 5px;
    z-index: 3;
    h3{
        margin: 10px auto 10px 20px;
    }
    p{
        margin: -5px auto 10px 20px;
    }
    
`;
const Sub3 = styled.div`
    background-color: #dcd8d4;
    position: absolute;
    top: 230px;
    left: 0px;
    width: 290px;
    height: 90px;
    margin: 25px auto;
    border-radius: 20px;
    padding: 5px;
    z-index: 4;
    h3{
        margin: 10px auto 10px 20px;
    }
    p{
        margin: -5px auto 10px 20px;
    }
    .ex{
        color: blue;
    }
`;

const DelBtn = styled.div`
    /* background-color: blue; */
    position: absolute;
    top: -30px;
    left:280px;
    z-index: 7;
`;



export default CardList;