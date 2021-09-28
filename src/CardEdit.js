import React from "react";
import styled from 'styled-components'
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";




import {removeCardFB, updateCardFB } from "./redux/modules/cardlist";


const CardEdit = (props) => {
    const newWordText = React.useRef(null);
    const newDescText = React.useRef(null);
    const newExampleText = React.useRef(null);

    const card_list = useSelector((state) => state.cardlist.card_list)
    const dispatch = useDispatch()

    const params = useParams();
    const history = useHistory();
    const cardIndex = params.index;


      

    const deleteBtn = () => {
        dispatch(removeCardFB(card_list[cardIndex].id));
        // console.log(card_list[cardIndex].id)
        history.push('/')
    };

    const editBtn = () => {
        dispatch(updateCardFB(
            {
                word: newWordText.current.value,
                desc: newDescText.current.value,
                example: newExampleText.current.value,
            },
            card_list[cardIndex].id
        )
            // console.log(params.index)

        )
        history.push('/')
    };

    console.log(card_list[cardIndex]? card_list[cardIndex].word : '') 

    return (
        <InputBox>

            <div>
                <div>
                    <p>단어</p>
                    <input type='text' ref={newWordText} defaultValue = {card_list[cardIndex]? card_list[cardIndex].word : ''}/>
                </div>
                <div>
                    <p>설명</p>
                    <input type='text' ref={newDescText} defaultValue = {card_list[cardIndex]? card_list[cardIndex].desc : ''} />
                </div>
                <div>
                    <p>예시</p>
                    <input type='text' ref={newExampleText} defaultValue = {card_list[cardIndex]? card_list[cardIndex].example : ''} />
                </div>

                <button onClick={editBtn}>이거 수정버튼임</button>
                <button onClick={deleteBtn}>이거 삭제버튼임</button>

            </div>
        </InputBox>


    );
};

const InputBox = styled.div`
background-color: aquamarine;
width: 25vw;
height: 200px;
padding: 16px;
margin: 8px;

    div{
        background-color: azure;
    height: 60px;
    margin: 0px;
    }

    p {
    margin: 5px;
    }
`;

export default CardEdit;