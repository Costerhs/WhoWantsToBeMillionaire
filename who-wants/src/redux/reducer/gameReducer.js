import produce from 'immer';

const SHOW_RESULT = 'SHOW_RESULT';
const MAIN_UP = 'MAIN_UP';
const SCORE_CHANGE = 'SCORE_CHANGE';

let initialize = {
  0: {
    questions: 'How old your elder brother was 10 years before you was born mate?',
    answer: [
      { variant: 'A', text: '10 years', flag: true },
      { variant: 'B', text: '11 years', flag: false },
      { variant: 'C', text: '12 years', flag: false },
      { variant: 'D', text: '13 years', flag: false },
    ],
  },
  1: {
    questions: 'Whats your name?',
    answer: [
      { variant: 'A', text: 'Nura', flag: true },
      { variant: 'B', text: 'Costerhs', flag: false },
      { variant: 'C', text: 'C9ssins', flag: false },
      { variant: 'D', text: 'lpoiku', flag: true },
    ],
  },
  2: {
    questions: 'Whats your name?',
    answer: [
      { variant: 'A', text: 'Nura', flag: true },
      { variant: 'B', text: 'Costerhs', flag: false },
      { variant: 'C', text: 'C9ssins', flag: false },
      { variant: 'D', text: 'lpoiku', flag: true },
    ],
  },
  3: {
    questions: 'Whats your name?',
    answer: [
      { variant: 'A', text: 'Nura', flag: true },
      { variant: 'B', text: 'Costerhs', flag: false },
      { variant: 'C', text: 'C9ssins', flag: false },
      { variant: 'D', text: 'lpoiku', flag: true },
    ],
  },
  score: [
    '1,000,000',
    '500,000',
    '250,000',
    '125,000',
    '64,000',
    '32,000',
    '16,000',
    '8,000',
    '4,000',
    '2,000',
    '1,000',
    '500',
  ],
  mainNum: 0,
};

const gameReducer = (state = initialize, action) => {
  switch (action.type) {
    case SHOW_RESULT:
      return produce(state, (draft) => {
        draft[action.id].answer.map((el) => {
          if (el.flag === true) {
            el['classes'] = 'activeQ';
          } else {
            el['classes'] = 'activeF';
          }
        });
      });

    case MAIN_UP: {
      return {
        ...state,
        mainNum: action.num,
      };
    }

    // case SCORE_CHANGE:
    //   return produce(state,(draft)=>{
    //     draft.score.map((elem,index)=> {

    //     })
    //   })
    default:
      return state;
  }
};

export const showResult = (id) => ({ type: SHOW_RESULT, id });
export const plusMain = (num) => ({ type: MAIN_UP, num });

export const clickThunk = (id) => async (dispatch) => {
  dispatch(showResult(id));
  let num = id + 1;
  setTimeout(() => {
    dispatch(plusMain(num));
  }, 3000);
};
export default gameReducer;
