import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import img from './static/goodnotes sticker.png'



const CardList = (props) => {
    const my_lists = useSelector((state) => state.cardlist.card_list)
    const history = useHistory();
    // console.log(my_lists)

    return (
        <Wrap>
            {my_lists.map((l, idx) => {
                // console.log(l, idx)
                return (

                   
                        <Main key={idx} onClick={() => { history.push("/CardEdit/" + idx); }}>

                            <Img alt="post" src={img} />

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
    /* background-color: aqua; */
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
    background-color: #efd3cd;
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
    background-color: #efd3cd;
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
    background-color: #efd3cd;
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



export default CardList;