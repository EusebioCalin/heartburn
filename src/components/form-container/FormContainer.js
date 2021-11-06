import React from 'react';
import FormHeader from '../form-header/FormHeader';
import MedicalForm from '../medical-form/MedicalForm';
import './form-container.scss';

const FormContainer = (props) => {

    return (
        <div className="container">
            <FormHeader/>
            <MedicalForm/>
        </div>
    )
}

export default FormContainer;