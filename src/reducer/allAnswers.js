const allAnswers = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ANSWER':
            return {
                ...state,
                [action.counter]:{
                    answer: action.answer,
                    actualAnswer: action.actualAnswer,
                }
            }

        default:
            return state;
    }
};

export default allAnswers;