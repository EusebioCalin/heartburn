import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveAnswer, goToPreviousQuestion, reset } from "../../store/questionaire/questionaire";
import FormHeader from '../form-header/FormHeader';
import OutcomeContainer from '../outcome-container.js/OutcomeContainer';
import FooterComponent from '../footer-component/FooterComponent';
import QuestionContainer from '../question-container/QuestionContainer';

import './form-component.scss';

const FormContainer = ({ 
    currentQuestion, 
    finalOutcome, 
    finished, 
    goToPreviousQuestion, 
    progress, 
    reset, 
    saveAnswer, 
    }) => {

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const goBack = () => {
        goToPreviousQuestion();
    }
    const setIsSelected = (id) => {
        setSelectedAnswer(id)
    }

    const onNextButtonClick = () => {
        saveAnswer(selectedAnswer);
        setSelectedAnswer(null);
    }

    const displayedContent = !finished 
    ? ( <QuestionContainer 
            question={currentQuestion} 
            selectedAnswer={selectedAnswer} 
            setSelectedAnswer={setIsSelected} 
        /> ) 
    : ( <OutcomeContainer 
            outcomeText={finalOutcome.text} 
            showBookingButton={finalOutcome.show_booking_button}
        /> )

    return (
        <div className="container">
            <FormHeader goBack={goBack} progress={progress} />
            {displayedContent}
            <FooterComponent 
                disabled={!selectedAnswer}
                finished={finished}
                onButtonClick={onNextButtonClick}
                onResetQuestionaire={reset}
            />
        </div>
    )
}

const mapDispatchToProps = { saveAnswer, goToPreviousQuestion, reset };

const mapStateToProps = (state) => {
    const { questionaire } = state;
    const { questions, questionId, finished, finalOutcome, progress } = questionaire;

    const currentQuestion = questions.find(question => question.id === questionId);
    return { currentQuestion, finished, finalOutcome, progress }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)

