import React, { useState } from 'react';
import FormHeader from '../form-header/FormHeader';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import { saveAnswer, goToPreviousQuestion, reset } from "../../store/questionaire/questionaire";
import './form-component.scss';
import OutcomeContainer from '../outcome-container.js/OutcomeContainer';
import FooterComponent from '../footer-component/FooterComponent';
import QuestionContainer from '../question-container/QuestionContainer';

const FormContainer = ({ currentQuestion, saveAnswer, goToPreviousQuestion, finished, finalOutcome, progress, reset }) => {

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
    ? ( <QuestionContainer question={currentQuestion} selectedAnswer={selectedAnswer} setSelectedAnswer={setIsSelected} />) 
    : ( <OutcomeContainer outcomeText={finalOutcome.text} showBookingButton={finalOutcome.show_booking_button}/> )

    return (
        <div className="container">
            <FormHeader progress={progress} goBack={goBack}/>
            {displayedContent}
            <FooterComponent 
                finished={finished}
                title="Next"
                disabled={!selectedAnswer}
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

