import React from 'react';
import { ReactComponent as IconSvg } from '../../icons/ic-arrow-left-green.svg';
import ProgressBar from '../progress-bar/ProgressBar'

import  './form-header.scss';

const FormHeader = ({progress, goBack}) => {
    const title = 'HeartBurn Checker';

    const onButtonClick = () => {
        goBack();
    }
    return (
        <div className="form-header">
            <div className="form-header__content">
                <span onClick={onButtonClick} className="form-header__icon">
                    <IconSvg/>
                </span>
                <span className="form-header__title">
                    {title}
                </span>
            </div>
            <ProgressBar progress={progress}/>
        </div>
    )
}

export default FormHeader; 