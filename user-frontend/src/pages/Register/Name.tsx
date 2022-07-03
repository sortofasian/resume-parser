import React from 'react'

import Form from '../../components/Form'

type Props = {
    setCard: (card: string) => void
    firstState: [string, (value: string) => void]
    lastState: [string, (value: string) => void]
    errorState: string | boolean
}

function Name({ setCard, firstState, lastState, errorState }: Props) {
    // Name form setup
    const firstInput = {
        label: 'First Name',
        state: firstState,
        autocomplete: 'given-name'
    }

    const lastInput = {
        label: 'Last Name',
        state: lastState,
        autocomplete: 'family-name'
    }

    const goBack = () => setCard('back')
    const nextButton = { label: 'Next', errorState: errorState, onClick: () => setCard('NewLogin') }

    return <Form title='Register' input1={firstInput} input2={lastInput} back={goBack} button={nextButton} />
}

export default Name
