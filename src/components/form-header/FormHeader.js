import React from 'react';
import { ReactComponent as IconSvg } from '../../icons/ic-arrow-left-green.svg';

import  './form-header.scss';

const FormHeader = ({props}) => {

    const title = 'HeartBurn Checker';
    return (
        <div className="form-header">
            <span className="form-header__icon">
                <IconSvg/>
            </span>
            <span className="form-header__title">
                {title}
            </span>
        </div>
    )
}

export default FormHeader; 