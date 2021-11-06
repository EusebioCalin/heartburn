import React from 'react';
import './custom-button.scss';

const CustomButton = ({title}) => {
    return (
        <button
            className='btn'
        >
            {title}
        </button>
    )
}

export default CustomButton;