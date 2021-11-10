import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { OUTCOME_BOOK_MEETING, OUTCOME_TITLE } from '../../utils/common';
import './outcome-container.scss';

const OutcomeContainer = ({outcomeText, showBookingButton}) => {

    return (
        <div className="outcome-container">
            <div className="outcome-container__title">
                {OUTCOME_TITLE}
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
                                clickHandler={() => alert('Appointment')}
                                disabled={false}
                                title={OUTCOME_BOOK_MEETING}
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