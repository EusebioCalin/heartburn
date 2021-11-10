import React from 'react';
import CustomButton from '../custom-button/CustomButton';

import './footer-component.scss';
const FooterComponent = ({disabled, onButtonClick, finished, onResetQuestionaire}) => {

    const onLinkClick = () => {
        onResetQuestionaire();
    }
    const content = !finished ? 
    (
        <CustomButton
            title="Next"
            disabled={disabled}
            clickHandler={onButtonClick}
        />
    ) : 
    (
        <a href={"#"} onClick={onLinkClick}>
            Back to the start screen
        </a>
    )
    return (
        <div className="footer__action-button">
            <div className="footer__action-button__container">
                {content}
            </div>
        </div>
    )
}

export default FooterComponent