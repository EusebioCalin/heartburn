import React from 'react';
import { ReactComponent as IconSvg } from '../../utils/icons/ic-arrow-left-green.svg';
import ProgressBar from '../progress-bar/ProgressBar'
import { FORM_HEADER_TITLE } from '../../utils/common';
import  './form-header.scss';

const FormHeader = ({goBack,progress}) => {

    const onButtonClick = () => {
        goBack();
    }
    return (
        <div className="form-header">
            <div className="form-header__content">
                <span className="form-header__icon" onClick={onButtonClick} >
                    <IconSvg/>
                </span>
                <span className="form-header__title">
                    {FORM_HEADER_TITLE}
                </span>
            </div>
            <ProgressBar progress={progress}/>
        </div>
    )
}

export default FormHeader; 