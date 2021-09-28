import React from "react";
import styled from 'styled-components'
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { createCardFB} from "./redux/modules/cardlist";

const AddCard = (props) => {
    const wordText = React.useRef(null);
    const descText = React.useRef(null);
    const exampleText = React.useRef(null);

    const history = useHistory();
    const params = useParams();

    const dispatch = useDispatch();

    const addBtn = () => {
        // console.log(wordText.current.value, descText.current.value, exampleText.current.value)
        // dispatch(createCard({ 
        // word : wordText.current.value, 
        // desc: descText.current.value, 
        // example : exampleText.current.value 
        // }))
        dispatch(createCardFB({
            word: wordText.current.value,
            desc: descText.current.value,
            example: exampleText.current.value
        }));
        history.push('/')
    }



    return (
        <InputBox>
            <div>
                <p>단어</p>
                <input type='text' ref={wordText} />
            </div>
            <div>
                <p>설명</p>
                <input type='text' ref={descText} />
            </div>
            <div>
                <p>예시</p>
                <input type='text' ref={exampleText} />
            </div>
            <button onClick={addBtn}>이거 추가버튼임</button>

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

export default AddCard;