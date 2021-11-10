import React from 'react';
import { ReactComponent as IconRightWhite } from '../../icons/ic-arrow-right-white.svg';
import { ReactComponent as IconRightGray } from '../../icons/ic-arrow-right-gray.svg';
import { ReactComponent as IconCheckmark } from '../../icons/ic-checkmark.svg';

import './custom-button.scss';

const CustomButton = ({id, disabled, title, isSelected, clickHandler}) => {

    let classes = '';
    let content = null;

    const onClick = (event) => {
        if (clickHandler) {
            if (id) {
                clickHandler(id);
            } else {
                clickHandler();
            }
        }
    }

    if (id) {
        classes = `answer-button ${isSelected ? 'answer-button--selected' : ''}`
        content = 
        ( !isSelected ?
            <>
                <span>
                    {title}
                </span>
            </>
            :
            <>
                <span>
                    {title}
                </span>
                <IconCheckmark className="simple-button__icon simple-button__icon--white"/>
            </>
        ); 
    } else {
        classes = `simple-button ${disabled ? 'simple-button--disabled' : ''}`;
        content = ( disabled ? 
        <>
            <span>
                {title}
            </span>
            <IconRightGray className="simple-button__icon"/>
        </>
        : 
        <>
            <span>
                {title}
            </span>
            <IconRightWhite className="simple-button__icon"/>
        </>
        )
    }


    return (
        <button
            disabled={disabled}
            className={classes}
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export default CustomButton;