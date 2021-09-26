import React from "react";
import styled from 'styled-components'

const AddCard = () => {
    return (
        <InputBox>
            <div>
                <p>단어</p>
                <input type = 'text'/>
            </div>
            <div>
                <p>단어</p>
                <input type = 'text'/>
            </div>
            <div>
                <p>단어</p>
                <input type = 'text'/>
            </div>
            <button>이거 추가버튼임</button>
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