import React from "react";
import styled from "styled-components";
import img from './static/goodnotes sticker.png'

const Style = (props) => {
    return (
        <Main>
             <Img alt="post" src = {img}/>
            <Sub>
            스타일
            </Sub>
            <Sub>
            스타일
            </Sub>
            <Sub>
            스타일
            </Sub>
        </Main>
    );
};



const Main = styled.div`
 
    background-image : url('bgimg.jpg');

    

`;

const Img = styled.img`
    position: absolute;
    top: -80px;
    left: -52px;
    width: 400px;
    height: 500px;
    display: flex;
    
`;

const Sub = styled.div`
    background-color: aquamarine;

    width: 300px;
    height: 90px;
    margin: 20px auto;
`;
export default Style;