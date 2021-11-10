import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import './outcome-container.scss';

const OutcomeContainer = ({outcomeText, showBookingButton}) => {

    const title = 'Thank you for answering the question!';
    const clickHandler = () => {

    }
    return (
        <div className="outcome-container">
            <div className="outcome-container__title">
                {title}
            <div className="question-container__question-border"></div>
            </div>
            <div className="outcome-container__text">
                {outcomeText}
            </div>
            { showBookingButton ? 
                (
                    <div className={"outcome_container__action-button"}>
                        <div className={"footer__action-button__container"}>
                            <CustomButton
                                title={'Book a meeting'}
                                disabled={false}
                                setIsSelected={clickHandler}
                                clickHandler={() => console.log('Appointment')}
                            />
                        </div>
                    </div>
                ) 
                : null
            }
        </div>
    );
}

export default OutcomeContainer;