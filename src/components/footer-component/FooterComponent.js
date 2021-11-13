import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { FOOTER_BUTTON_TEXT } from '../../utils/common';

import './footer-component.scss';
const FooterComponent = ({disabled, onButtonClick, finished, onResetQuestionaire}) => {

    const onLinkClick = () => {
        onResetQuestionaire();
    }
    const content = !finished ? 
    (
        <CustomButton
            title={FOOTER_BUTTON_TEXT}
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