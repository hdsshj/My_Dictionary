import React from "react";
import styled from 'styled-components'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

import img from './static/goodnotes sticker.png'

import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";




import { removeCardFB, removeCard, updateCard, updateCardFB } from "./redux/modules/cardlist";


const CardEdit = (props) => {
    const newWordText = React.useRef(null);
    const newDescText = React.useRef(null);
    const newExampleText = React.useRef(null);

    const card_list = useSelector((state) => state.cardlist.card_list)
    const dispatch = useDispatch()

    const params = useParams();
    const history = useHistory();
    const cardIndex = params.index;

    const editBtn = () => {
        //     dispatch(updateCard(
        //         {
        //             word: newWordText.current.value,
        //             desc: newDescText.current.value,
        //             example: newExampleText.current.value,
        //         },
        //         cardIndex
        //     )
        //     )
        //     history.push('/')
        // }

        //파이어베이스사용시 활성화
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



    return (

        <Main>
            <Img alt="post" src={img} />
            <Sub1>
                <h3>단어</h3>
                <TextField
                    style={{ width: '440px', margin: '20px 20px' }}
                    label="단어를 입력하세요."
                    variant="outlined"
                    type='text'
                    color="primary"
                    defaultValue={card_list[cardIndex] ? card_list[cardIndex].word : ''}
                    inputRef={newWordText} />
            </Sub1>
            <Sub2>
                <h3>설명</h3>
                <TextField
                    label="설명을 입력하세요."
                    style={{ width: '440px', margin: '0px 20px' }}
                    multiline
                    rows={2.5}
                    type='text'
                    color="primary"
                    defaultValue={card_list[cardIndex] ? card_list[cardIndex].desc : ''}
                    inputRef={newDescText} />
            </Sub2>
            <Sub3 >
                <h3>예시</h3>
                <TextField label="예제를 입력하세요."
                    style={{ width: '440px', margin: '0px 20px' }}
                    multiline
                    rows={2.5}
                    type='text'
                    color="primary"
                    defaultValue={card_list[cardIndex] ? card_list[cardIndex].example : ''}
                    inputRef={newExampleText} />
            </Sub3>
            <AddBtn>
                <IconButton onClick={editBtn} >
                    <EditIcon style={{ fontSize: '40px' }} />
                </IconButton>
            </AddBtn>
            <BackBtn>
                {/* <IconButton onClick={deleteBtn}> */}
                <IconButton onClick={() => { history.push('/') }}>
                    <ArrowBackIcon style={{ fontSize: '40px' }} />
                </IconButton>
            </BackBtn>
        </Main>


    );
};

const Main = styled.div`
    /* background-color: aqua; */
    position: relative;
    
    width: 500px;
    height: 550px;
    margin: 100px auto;
    z-index: 1;
    

`;

const Img = styled.img`
    position: absolute;
    top: -80px;
    left: -52px;
    width: 600px;
    height: 700px;
    
    
`;





const Sub1 = styled.div`
    background-color: #dcd8d4;
    position: absolute;
    top: 20px;
    left: 0px;
    width: 480px;
    height: 140px;
    margin: 25px auto;
    border-radius: 20px;
    padding: 5px;
    z-index: 2;
    
    h3{
        margin: 5px auto 10px 20px;
    }
    p{
        margin: -5px auto 10px 20px;
    }
`;

const Sub2 = styled.div`
    background-color: #dcd8d4;
    position: absolute;
    top: 190px;
    left: 0px;
    width: 480px;
    height: 140px;
    margin: 25px auto;
    border-radius: 20px;
    padding: 5px;
    z-index: 3;

    h3{
        margin: 5px auto 10px 20px;
    }
    p{
        margin: -5px auto 10px 20px;
    }    
`;

const Sub3 = styled.div`
    background-color: #dcd8d4;
    position: absolute;
    top: 360px;
    left: 0px;
    width: 480px;
    height: 140px;
    margin: 25px auto;
    border-radius: 20px;
    padding: 5px;
    z-index: 4;

    h3{
        margin: 5px auto 10px 20px;
    }
    p{
        margin: -5px auto 10px 20px;
    }
    .ex{
        color: blue;
    }
`;

const AddBtn = styled.div`
/* background-color: aquamarine; */
position: absolute;
top: -15px;
left: 440px;
z-index: 6;
`;

const BackBtn = styled.div`
/* background-color: aquamarine; */
position: absolute;
top: -15px;
left: 0px;
z-index: 6;
`;

export default CardEdit;