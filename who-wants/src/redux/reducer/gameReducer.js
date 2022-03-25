import produce from 'immer';

const SHOW_RESULT = 'SHOW_RESULT';
const MAIN_UP = 'MAIN_UP';
const SCORE_CHANGE = 'SCORE_CHANGE';
const TOGGLE_H1 = 'TOGGLE_H1s';
const TOGGLE_BAD = 'TOGGLE_BAD';
let initialize = {
  0: {
    questions: 'Что говорит человек, когда замечает нечто необычное?',
    answer: [
      { variant: 'A', text: 'бросилось в глаза', flag: true },
      { variant: 'B', text: 'залетело в рот', flag: false },
      { variant: 'C', text: 'покаполо в лоб', flag: false },
      { variant: 'D', text: 'накапали в уши', flag: false },
    ],
  },
  1: {
    questions: 'Как правильно закончить пословицу : "Не откладывай на завтра то, что можно ... "?',
    answer: [
      { variant: 'A', text: 'сделать послезавтра', flag: false },
      { variant: 'B', text: 'Cделать сегодня', flag: true },
      { variant: 'C', text: 'никогда не делать', flag: false },
      { variant: 'D', text: 'сделать через месяц', flag: false },
    ],
  },
  2: {
    questions: 'Что помогает туристу ориентироваться в незнакомом городе?',
    answer: [
      { variant: 'A', text: 'путоводитель', flag: true },
      { variant: 'B', text: 'путепровод', flag: false },
      { variant: 'C', text: 'путеводная звезда', flag: false },
      { variant: 'D', text: 'путеукладчик', flag: false },
    ],
  },
  3: {
    questions: 'Что тяжелее 1кг ваты или 1кг железа?',
    answer: [
      { variant: 'A', text: 'ты', flag: false },
      { variant: 'B', text: 'вата', flag: false },
      { variant: 'C', text: 'железо', flag: false },
      { variant: 'D', text: 'оба равны', flag: true },
    ],
  },
  4: {
    questions: 'Ты красивый(-aя)?',
    answer: [
      { variant: 'A', text: 'нет', flag: false },
      { variant: 'B', text: 'да', flag: true },
      { variant: 'C', text: 'ты вообще видел меня?', flag: false },
      { variant: 'D', text: 'yes', flag: false },
    ],
  },
  5: {
    questions: '!"№%?;№:"%!"№;?',
    answer: [
      { variant: 'A', text: 'не нажимай сюда', flag: true },
      { variant: 'B', text: 'здесь все правильно', flag: false },
      { variant: 'C', text: 'click me', flag: false },
      { variant: 'D', text: 'устал придумать вопросы', flag: false },
    ],
  },
  6: {
    questions: 'Еще 5 вопросов? 😟😟😟😟😟😟😟😟😟😟😟',
    answer: [
      { variant: 'A', text: 'да', flag: true },
      { variant: 'B', text: 'правда', flag: true },
      { variant: 'C', text: 'естественно', flag: true },
      { variant: 'D', text: 'очевидно', flag: true },
    ],
  },
  7: {
    questions: 'Сколько клеток  в шамхматной доске?',
    answer: [
      { variant: 'A', text: '128', flag: false },
      { variant: 'B', text: '62', flag: false },
      { variant: 'C', text: '64', flag: true },
      { variant: 'D', text: '96', flag: false },
    ],
  },
  8: {
    questions: '12 x 6 + 258 - 65 = ?',
    answer: [
      { variant: 'A', text: '265', flag: true },
      { variant: 'B', text: '276', flag: false },
      { variant: 'C', text: '2388', flag: false },
      { variant: 'D', text: 'я гуманитарий', flag: false },
    ],
  },
  9: {
    questions: 'Как правильно пишется?',
    answer: [
      { variant: 'A', text: 'Так-же', flag: false },
      { variant: 'B', text: 'Так же', flag: false },
      { variant: 'C', text: 'Так,же', flag: false },
      { variant: 'D', text: 'Также', flag: true },
    ],
  },
  10: {
    questions: 'Как правильно пишется?',
    answer: [
      { variant: 'A', text: ' горицвет', flag: true },
      { variant: 'B', text: 'гори цвет', flag: false },
      { variant: 'C', text: 'гори,цвет', flag: false },
      { variant: 'D', text: 'гори-цвет', flag: false },
    ],
  },
  11: {
    questions: 'Успехов тебе',
    answer: [
      { variant: 'A', text: 'Спасибо', flag: true },
      { variant: 'B', text: 'Благодарю', flag: true },
      { variant: 'C', text: 'Thank you', flag: true },
      { variant: 'D', text: 'пошел в *********', flag: false },
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
  forAnimation: true,
  badGame: false,
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

    case TOGGLE_H1:
      return produce(state, (draft) => {
        draft.forAnimation = !draft.forAnimation;
      });

    case TOGGLE_BAD:
      return {
        ...state,
        badGame: true,
      };
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
export const toggleAni = () => ({ type: TOGGLE_H1 });
export const toggleBad = () => ({ type: TOGGLE_BAD });

export const clickThunk = (id, trues) => async (dispatch) => {
  dispatch(showResult(id));

  if (trues === true) {
    setTimeout(() => {
      dispatch(toggleAni());
    }, 2990);
    let num = id + 1;
    setTimeout(() => {
      dispatch(plusMain(num));
      dispatch(toggleAni());
    }, 3000);
  } else {
    setTimeout(() => {
      dispatch(toggleBad());
    }, 3000);
  }

  // setTimeout(() => {
  //   dispatch(toggleAni());
  // }, 3001);
};
export default gameReducer;
