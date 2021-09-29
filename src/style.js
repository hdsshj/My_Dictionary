import React from "react";
import styled from "styled-components";
import img from './static/goodnotes sticker.png'

const Style = (props) => {

    const wordText = React.useRef(null);
    const descText = React.useRef(null);
    const exampleText = React.useRef(null);

    return (
        <Main>
           
        </Main>
    );
};



const Main = styled.div`
    position: relative;
    top: 0px;
    background-image : url("${img}");
    width: 400px;
    height: 400px;
    padding: 30px;
    margin: auto;
   
    

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

const Sub3 = styled.div`
    background-color: aquamarine;

    width: 300px;
    height: 90px;
    margin: 20px auto;

    p{
        color: blue;
    }
`;
export default Style;