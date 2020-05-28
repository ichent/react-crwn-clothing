import React from 'react';

import './sing-in-and-sign-up-component.scss';
import SignInComponent from "../../components/sign-in/sign-in-component";
import SignUpComponent from "../../components/sign-up/sign-up-component";

const SingInAndSignUpPage = () => (
    <div className='sing-in-and-sign-up'>
        <SignInComponent/>
        <SignUpComponent/>
    </div>
)

export default SingInAndSignUpPage;