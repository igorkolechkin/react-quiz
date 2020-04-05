import axios from '@services/firebase';
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
} from './actionTypes';

export function fetchQuizzes() {
  return async dispatch => {
    dispatch({ type: FETCH_QUIZZES_START });

    try {
      const response = await axios.get(`quizzes.json`);
      let quizzes = [];

      Object.keys(response.data).forEach((quizName, index) => {
        quizzes.push({
          id: index,
          name: quizName,
          title: response.data[quizName].quizzesTitle,
          description: response.data[quizName].quizzesDescription,
          icon: response.data[quizName].quizzesIcon
        });
      });

      dispatch({ type: FETCH_QUIZZES_FINISH, payload: quizzes });
    } catch (error) {
      dispatch({ type: FETCH_QUIZZES_ERROR, payload: error });
    }
  }
}

export function fetchQuiz(id) {
  return async dispatch => {
    dispatch({ type: FETCH_QUIZ_START });

    try {
      const response = await axios.get(`quizzes/${id}.json`);
      dispatch({ type: FETCH_QUIZ_FINISH, payload: response.data.quizzes });
    } catch (error) {
      dispatch({ type: FETCH_QUIZ_ERROR, payload: error });
    }
  }
}

export function quizAnswerEnter(id) {
  return async (dispatch, getState) => {
    const state = getState().quiz;

    if (state.noClickableAnswer) return;

    const resultState = state.resultState;
    let activeQuestion = state.activeQuestion;
    let isFinished = state.isFinished;

    if (state.quiz[state.activeQuestion].rightAnswer === id) {
      activeQuestion++;

      if (!resultState.results[state.activeQuestion]) {
        resultState.results[state.activeQuestion] = 'success';
        resultState.total = resultState.total + 1
      }

      dispatch({
        type: QUIZ_ANSWER_STATE,
        answerState: {[id]: 'success'}
      });

      if (activeQuestion >= state.quiz.length) isFinished = true;

    } else {
      resultState.results[state.activeQuestion] = 'error';

      dispatch({
        type: QUIZ_ANSWER_STATE,
        answerState: {[id]: 'error'}
      });
    }

    const timeout = window.setTimeout(() => {
      dispatch({
        type: QUIZ_ANSWER_NEXT,
        activeQuestion,
        isFinished,
        resultState
      });

      window.clearTimeout(timeout);
    }, 2000);
  }
}

export function quizAnswerReset() {
  return { type: QUIZ_ANSWER_RESET }
}
