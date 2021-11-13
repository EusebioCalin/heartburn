import { createSlice } from '@reduxjs/toolkit'
import * as data from '../../utils/form.json';


const initialState = {
    score: 0,
    questionId: 'is_heartburn_known',
    // contains previous question and answer score
    questionHistory: [],
    questions: data.questions,
    outcomes: data.outcomes,
    finished: false,
    finalOutcome: null,
    progress: 0,
};

export const questionaire = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        reset: state => initialState,
        saveAnswer: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        const { payload } = action;

        const currentQuestion = state.questions.find(question => question.id === state.questionId);
        const answer = currentQuestion.answers.find(answer => answer.id === payload);
        state.score += answer.score;
        const nextQuestion = currentQuestion.next.find(next => next.answered === payload);

        state.questionHistory = [...state.questionHistory, {
            questionId: state.questionId,
            answerScore: answer.score,
        }]

        if (nextQuestion) {
            state.questionId = nextQuestion.next_question;
        } else {
            const containsOutcome = (element) => element && element.outcome;

            if (currentQuestion.next.some(containsOutcome)) {
                state.finished = true;
                let finalOutcome;
                currentQuestion.next.forEach((next) => {
                    if (next.max_score && next.max_score >= state.score && !finalOutcome) {
                        finalOutcome = state.outcomes.find(outcome => outcome.id === next.outcome);
                    } else if (!finalOutcome && !next.max_score){
                        finalOutcome = state.outcomes.find(outcome => outcome.id === next.outcome);
                    }
                })
                state.finalOutcome = finalOutcome;
            } else {
                state.questionId = currentQuestion.next[0].next_question;
            }
        }
        
        state.progress = state.finished ? 100 : Math.floor((100 * state.questionHistory.length) / state.questions.length); 

        },
        goToPreviousQuestion: (state) => {
            if (state.questionHistory.length) {
                if (state.finished) {
                    state.finished = false;
                    state.finalOutcome = null;
    
                }
                const previousQuestion = state.questionHistory[state.questionHistory.length - 1];
                state.questionId = previousQuestion.questionId;
                state.questionHistory.length = state.questionHistory.length - 1;
                state.score = state.score - previousQuestion.answerScore;
            
                state.progress = Math.floor((100 * state.questionHistory.length) / state.questions.length); 
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { saveAnswer, goToPreviousQuestion, reset } = questionaire.actions

export default questionaire.reducer