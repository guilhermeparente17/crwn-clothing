import React from 'react';

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component.jsx';
import CustomButtom from '../custom-buttom/custom-buttom.component';

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })

    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        label="email"
                        handleChange={this.handleChange}
                        name="email"
                        value={this.state.email}
                        required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />

                    <div className='buttons'>
                        <CustomButtom type="submit">sign in</CustomButtom>
                        <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
                            sign in with google
                        </CustomButtom>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
