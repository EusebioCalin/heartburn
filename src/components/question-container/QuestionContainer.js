import React from 'react';
import CustomButton from '../custom-button/CustomButton';

import './question-container.scss';
const QuestionContainer = ({
        question, 
        selectedAnswer, 
        setSelectedAnswer
    }) => {

    const { answers } = question;

    const buttons = answers.map((answer) => 
        <CustomButton
            clickHandler={setSelectedAnswer}
            id={answer.id}
            isSelected={selectedAnswer && selectedAnswer === answer.id ? true : false}
            key={answer.id}
            title={answer.label}
        />
    );

    return (
        <div className="question-container__form">
            <div className="question-container__question">
                <div className="question-container__question-text">
                    {question.question_text}
                </div>
                <div className="question-container__question-border"></div>
            </div>
            <div className="question-container__form-buttons">
                {buttons}
            </div>
        </div>
    )
}

export default QuestionContainer;