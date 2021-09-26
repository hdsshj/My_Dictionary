import React from "react";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";



const CardList = (props) => {
    const my_lists = useSelector((state) => state.cardlist.card_list)
    console.log(my_lists)

    return (
        <ListStyle>
            {my_lists.map((l, idx) => {
                console.log(l, idx)
                return (
                    <ItemStyle key={idx}>
                        <div>
                            <p>단어</p>
                            <p>{l.word}</p>
                        </div>
                        <div>
                            <p>설명</p>
                            <p>{l.desc}</p>
                        </div>
                        <div >
                            <p>예시</p>
                            <p className='ex'>{l.example}</p>
                        </div>
                    </ItemStyle>
                );
            })}

        </ListStyle>
    );
};

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 50vh;
overflow-x: hidden;
overflow-y: auto;
max-height: 50vh;
`;

const ItemStyle = styled.div`
background-color: aquamarine;
width: 25vw;
height: 200px;
padding: 16px;
margin: 8px;

div {
    background-color: azure;
    height: 60px;
    margin: 0px;
}

p {
    margin: 5px;
}

.ex{
    color: blue;
}
`;

export default CardList;