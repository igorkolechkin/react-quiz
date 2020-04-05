import {
  FETCH_QUIZZES_START,
  FETCH_QUIZZES_FINISH,
  FETCH_QUIZZES_ERROR,
  FETCH_QUIZ_START,
  FETCH_QUIZ_FINISH,
  FETCH_QUIZ_ERROR,
  QUIZ_ANSWER_STATE,
  QUIZ_ANSWER_NEXT,
  QUIZ_ANSWER_RESET
} from '@store/actions/actionTypes';

const initialState = {
  quizzes: [],
  loader: false,
  error: false,
  isFinished: false,
  activeQuestion: 0,
  answerState: null,
  noClickableAnswer: false,
  resultState: {
    total: 0,
    results: {}
  },
  quiz: []
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZZES_START:
      return { ...state, loader: true };
    case FETCH_QUIZZES_FINISH:
      return { ...state, loader: false, quizzes: action.payload };
    case FETCH_QUIZZES_ERROR:
      return { ...state, loader: false, error: action.payload };

    case FETCH_QUIZ_START:
      return { ...state, loader: true };
    case FETCH_QUIZ_FINISH:
      return { ...state, loader: false, quiz: action.payload };
    case FETCH_QUIZ_ERROR:
      return { ...state, loader: false, error: action.payload };

    case QUIZ_ANSWER_STATE:
      return {
        ...state,
        answerState: action.answerState,
        noClickableAnswer: true,
      };
    case QUIZ_ANSWER_NEXT:
      return {
        ...state,
        answerState: null,
        noClickableAnswer: false,
        activeQuestion: action.activeQuestion,
        isFinished: action.isFinished
      };
    case QUIZ_ANSWER_RESET:
      return {
        ...state,
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        resultState: { total: 0, results: {} }
      };

    default:
      return state
  }
}
