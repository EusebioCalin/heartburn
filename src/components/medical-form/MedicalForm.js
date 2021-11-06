import React from 'react';
import CustomButton from '../custom-button/CustomButton';

import './medical-form.scss';

const MedicalForm = ({props}) => {
    return (
        <div className="medical-form">
            Is your heartburn previously known?
            <div>
                <CustomButton title="Option 1"/>
                <CustomButton title="Option 2"/>
            </div>
        </div>
    )
}

export default MedicalForm;