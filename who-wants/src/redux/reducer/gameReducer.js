let initialize = {
  // 0:[
  //     {questions}
  // ]
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
    questions: 'whats your name?',
    answer: [
      { variant: 'A', text: 'Nura', flag: true },
      { variant: 'B', text: 'Costerhs', flag: false },
      { variant: 'C', text: 'C9ssins', flag: false },
      { variant: 'D', text: 'lpoiku', flag: false },
    ],
  },
};

const gameReducer = (state = initialize, action) => {
  switch (action.type) {
    case 'value':
      break;

    default:
      return state;
  }
};

export default gameReducer;
