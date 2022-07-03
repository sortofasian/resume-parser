import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../App'
import Form from '../components/Form'
import useCaptcha from '../hooks/useCaptcha'
import useSubmit from '../hooks/useSubmit'

function Login() {
    // State
    const [loading, setLoading] = useState({ loading: false, error: false } as IsLoading)
    const setUser = useContext(UserContext)[1]

    // Hooks
    const verify = useCaptcha() /// Get captcha token
    const navigate = useNavigate() /// React router navigate

    type LoginRequest = { email: string; password: string }
    type LoginResponse = User
    const submit = useSubmit<LoginRequest, LoginResponse>('/users/login', setLoading)

    // Login logic
    const login = async () => {
        // Run reCaptcha v3
        const captchaToken = await verify()

        // Assemble login object
        const loginInfo = { email: emailState[0], password: pwdState[0], captcha: captchaToken }

        try {
            const result = await submit(loginInfo)

            const newUser: User = {
                loggedIn: true,
                first: result.first,
                last: result.last,
                uid: result.uid
            }
            setUser(newUser)

            navigate('/profile')
        } catch (error) {
            console.log(error)
        }
    }

    // Login form setup

    const emailState = useState('')
    const emailInput = { label: 'E-mail', state: emailState, type: 'email', autocomplete: 'email' }

    const pwdState = useState('')
    const pwdInput = {
        label: 'Password',
        state: pwdState,
        type: 'password',
        autocomplete: 'current-password'
    }

    const goBack = () => navigate('/')
    const help = () => navigate('/forgot')
    const loginButton = {
        label: 'Login',
        loading: loading,
        onClick: login,
        errorState: loading.error
    }

    return (
        <Form
            title='Login'
            input1={emailInput}
            input2={pwdInput}
            back={loading.loading ? () => {} : goBack}
            help={loading.loading ? () => {} : help}
            button={loginButton}
        />
    )
}

export default Login
