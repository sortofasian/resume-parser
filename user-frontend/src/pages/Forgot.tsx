import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ErrorMessage from '../components/ErrorMessage'
import GDisclaimer from '../components/GDisclaimer'
import Header from '../components/Header'
import Icon from '../components/Icon'
import LoadingButton from '../components/LoadingButton'
import TextInput from '../components/TextInput'
import useCaptcha from '../hooks/useCaptcha'
import useSubmit from '../hooks/useSubmit'

function Forgot() {
    // State
    const emailState = useState('')
    const [loading, setLoading] = useState({ loading: false, error: false } as IsLoading)

    // Hooks
    const verify = useCaptcha() /// Get captcha token
    const navigate = useNavigate() /// React router navigate
    const submit = useSubmit('/users/reset', setLoading) ///

    // Reset logic
    const reset = async () => {
        const captchaToken = verify()

        const resetInfo = { email: emailState[0], captcha: captchaToken }

        try {
            const result = await submit(resetInfo)
            console.log(result)
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header>Forgot Password</Header>

            {loading.error ? <ErrorMessage>{loading.error as string}</ErrorMessage> : ''}

            <TextInput state={emailState}>E-mail</TextInput>

            <GDisclaimer />

            <div style={{ position: 'absolute', left: '20px', bottom: '20px' }}>
                <Icon icon='fa-angle-left' onClick={() => navigate('/login')} />
            </div>

            <div style={{ margin: 'auto', width: 'fit-content' }}>
                <LoadingButton onClick={reset} loadState={loading}>
                    Reset
                </LoadingButton>
            </div>
        </>
    )
}
export default Forgot
