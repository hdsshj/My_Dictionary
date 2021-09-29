import { db } from '../../firebase';
import { collection, getDoc, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import { async } from '@firebase/util';



const LOAD = 'card/LOAD';
const CREATE = 'card/CREATE';
const UPDATE = 'card/UPDATE';
const REMOVE = 'card/REMOVE';

const initialState = {
  card_list: [ 
    {word: '파이어 베이스가 안된다', desc: '난 한 것도 없는데', example: '날 방해한다'},
    {word: '쓰기 귀찮아', desc: '난 한 것도 없는데', example: '날 방해한다'},
    {word: '텍스트도 못가져온다', desc: '머티리얼', example: '어렵다'}
  ],
};



// Action Creators
export function loadCard(cardList) {
  return { type: LOAD, cardList };
}

export function createCard(card) {
  return { type: CREATE, card };
}

export function updateCard(card, cardIndex) {
  return { type: UPDATE, card, cardIndex };
}

export function removeCard(cardIndex) {
  return { type: REMOVE, cardIndex };
}


export const loadCardFB = () => {
  return async function (dispatch) {
    const cardData = await getDocs(collection(db, 'mydictionary'));

    let card_list = [];

    cardData.forEach((doc) => {
      // console.log(doc.data())
      card_list.push({ id: doc.id, ...doc.data() })
    })

    dispatch(loadCard(card_list));

    // console.log('이건 DB', cardData);
  }
};

export const createCardFB = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, 'mydictionary'), card);

    const card_data = { id: docRef.id, ...card }
    console.log(card_data)

    dispatch(createCard(card_data));

  }
};


// 파이어베이스 사용시 활성화
//수정 하고자 하는 내용과 data의 id값을 파라미터로 받는다.
export const updateCardFB = (card, card_id) => {
  return async function (dispatch, getState) {
    // 파라미터로 받은 card_id와 같은 id를 가지고 있는 doc의 data를 가져와서
    const docRef = await doc(db, 'mydictionary', card_id)

    // 해당 data를 업데이트 한다
    await updateDoc(docRef, {word : card.word, desc : card.desc, example : card.example})

    //card_list의 state값을 가져와서
    const _card_list = getState().cardlist.card_list

    //id값이 같은 data만 반환 한다.
    const card_index = _card_list.findIndex((b) => {
      // console.log(b.id)
      return b.id === card_id;
    })
    // console.log(card_index,'인덱스임')

     //updateCard 액션을 dispatch 한다.
    dispatch(updateCard({word : card.word, desc : card.desc, example : card.example},card_index))
  }
};

//미들웨어 REMOVE
//지우고자 하는 data의 id값을 파라미터로 받는다.
export const removeCardFB = (card_id) => {
  return async function (dispatch, getState) {
    // card_id가 없으면 alert을 띄운다.
    if(!card_id){
      window.alert('지울게 없네용 ㅎ')
      return;
    }

    // 파라미터로 받은 card_id와 같은 id를 가지고 있는 doc의 data를 가져와서
    const docRef = await doc(db, 'mydictionary', card_id)

    // 해당 data를 삭제 한다
    await deleteDoc(docRef)
    // console.log(docRef)

    //card_list의 state값을 가져와서
    const _card_list = getState().cardlist.card_list
    console.log(_card_list)

    //id값이 같은 data만 반환 한다.
    const card_index = _card_list.findIndex((b) => {
      return b.id === card_id;
    })
    // console.log(card_index,'인덱스임')\
    
    //removeCard 액션을 dispatch 한다.
    dispatch(removeCard(card_index));
  }
};


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'card/LOAD': {
      // console.log('로드 연결댐', action)
      return { card_list: action.cardList }
    }
    case 'card/CREATE': {
      // console.log('연결 됨', action, state)
      const new_card_list = [...state.card_list, action.card]
      // console.log('새로운 리스트', new_card_list)
      return { ...state, card_list: new_card_list }
    }
    case 'card/UPDATE': {
      console.log('업데이트할거야', state.card_list)
      const new_card_list = state.card_list.map((l, idx) => {
        // console.log()
        //action으로 받아온 list중 index값이 같은 data를 찾아
        if (parseInt(action.cardIndex) === idx) {
          
          //수정된 data로 반환 하고
          return {...l, ...action.card}
        } else {
          //index값이 다르면 기존 data를 반환한다.
          return l;
        }
      })
      console.log({...state, card_list : new_card_list})        
      return {...state, card_list : new_card_list}
    }    
    case 'card/REMOVE': {
      console.log('delete 연결 댐', state.card_list)
      const new_card_list = state.card_list.filter((l, idx) => {
        // console.log(action.cardIndex)
        // action으로 받아온 list중 Index값이 같지 않은 data로만 이루어진 배열을 반환한다.
        return parseInt(action.cardIndex) !== idx
      })

      return { ...state, card_list: new_card_list }
    }
    default: return state;
  }
}