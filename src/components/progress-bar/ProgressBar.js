import React from 'react';
import './progress-bar.scss';

const ProgressBar = ({progress}) => {


    return (
        <div id="progressbar" >
            <div style={{width: `${progress}%`}}></div>
        </div>
    )
}

export default ProgressBar;