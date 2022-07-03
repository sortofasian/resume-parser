import React from 'react'

import Form from '../../components/Form'

type Props = {
    setCard: (card: string) => void
    emailState: [string, (value: string) => void]
    pwdState: [string, (value: string) => void]
    loading: IsLoading
    errorState: string | boolean
}

function NewLogin({ setCard, emailState, pwdState, loading }: Props) {
    // Name form setup
    const emailInput = {
        label: 'E-mail',
        state: emailState,
        type: 'email',
        autocomplete: 'email'
    }

    const pwdInput = {
        label: 'New Password',
        state: pwdState,
        type: 'password',
        autocomplete: 'new-password'
    }

    const goBack = () => setCard('Name')
    const nextButton = {
        label: 'Register',
        errorState: loading.error,
        loading: loading,
        onClick: () => setCard('submit')
    }

    return <Form title='Register' input1={emailInput} input2={pwdInput} back={goBack} button={nextButton} />
}

export default NewLogin
