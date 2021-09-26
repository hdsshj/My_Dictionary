const LOAD   = 'card/LOAD';
const CREATE = 'card/CREATE';
const UPDATE = 'card/UPDATE';
const REMOVE = 'card/REMOVE';

const initialState = {
    card_list: [
      { word : 'XD', desc: '메롱이라는뜻', example : '님들 이거 좋은거에요? XD' },
      { word : '정글차이', desc: '라인전을 졌을 때 사용한다.', example : '0/5/0 ??? : ㅈㄱㅊㅇ ㅈㅈ' },
      { word : '아 왜 안나가', desc: '스킬을 안썻을 때 사용한다.', example : '아 눌렀는데 왜 안나가 ㅡㅡ' },
    ],
  };



// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget() {
  return { type: CREATE,  };
}

export function updateWidget() {
  return { type: UPDATE,  };
}

export function removeWidget() {
  return { type: REMOVE,  };
}


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      // do reducer stuff
      default: return state;
    }
  }