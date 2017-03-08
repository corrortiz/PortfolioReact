import React from 'react';
import AboutText from '../Componets/LandingPage/AboutText';
import FormLayout from '../Componets/ContacForm/FormLayout';

const Contact = () =>(
    <div className="container">
        <AboutText
            title="Contact"
            inerText="You can tell us about your project through these channels"
        />
        <FormLayout/>
    </div>
);

export default Contact;
