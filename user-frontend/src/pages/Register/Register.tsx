import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../../App'
import useCaptcha from '../../hooks/useCaptcha'
import useSubmit from '../../hooks/useSubmit'
import Name from './Name'
import NewLogin from './NewLogin'

function Register() {
    // State

    /// User state
    const setUser = useContext(UserContext)[1]

    /// Form state
    const [cardState, setCardState] = useState('Name')

    /// Load state
    const [loading, setLoading] = useState({ loading: false, error: false } as IsLoading)

    /// Input field states
    const firstState = useState('')
    const lastState = useState('')
    const emailState = useState('')
    const pwdState = useState('')

    // Hooks
    const verify = useCaptcha() /// Get captcha token
    const navigate = useNavigate() /// Navigate

    type RegisterRequest = {
        first: string
        last: string
        email: string
        password: string
        captcha: string
    }
    const submit = useSubmit<RegisterRequest, User>('/users/register', setLoading) /// POST register request

    // Card switch logic
    const setCard = (card: string) => {
        // Submit form if card state is set to 'submit
        switch (card) {
            case 'back':
                navigate('/')
                return
            case 'submit':
                register()
                return
        }

        // else, pass card into cardState
        setCardState(card)
    }

    // Register logic
    const register = async () => {
        // Run reCaptcha
        const captchaToken = await verify()

        // Assemble register object
        const registerInfo = {
            first: firstState[0],
            last: lastState[0],
            email: emailState[0],
            password: pwdState[0],
            captcha: captchaToken
        }

        try {
            const result = await submit(registerInfo)

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

    // Switch render based on state
    switch (cardState) {
        case 'Name':
            return (
                <Name
                    setCard={setCard}
                    firstState={firstState}
                    lastState={lastState}
                    errorState={loading.error}
                />
            )
        case 'NewLogin':
            return (
                <NewLogin
                    setCard={setCard}
                    emailState={emailState}
                    pwdState={pwdState}
                    loading={loading}
                    errorState={loading.error}
                />
            )
        default:
            return (
                <Name
                    setCard={setCard}
                    firstState={firstState}
                    lastState={lastState}
                    errorState={loading.error}
                />
            )
    }
}

export default Register
