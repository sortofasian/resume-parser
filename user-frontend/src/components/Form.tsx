import React from 'react'

import Button from './Button'
import ErrorMessage from './ErrorMessage'
import GDisclaimer from './GDisclaimer'
import Header from './Header'
import Icon from './Icon'
import LoadingButton from './LoadingButton'
import TextInput from './TextInput'

type Input = {
    label: string
    state: [string, (value: string) => void]
    type?: string
    autocomplete?: string
}
type ButtonProps = {
    label: string
    loading?: IsLoading
    errorState?: string | boolean
    onClick: () => void
}
type Props = {
    title: string
    input1: Input
    input2: Input
    back: () => void
    help?: () => void
    button: ButtonProps
}

function Form({ title, input1, input2, back, help, button }: Props) {
    // Check if field1 is an email or other username type
    let isUname = false
    if (input1.type) {
        if (input1.type === 'email') {
            isUname = true
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                button.onClick()
            }}
        >
            <Header>{title}</Header>

            {button.errorState ? <ErrorMessage>{button.errorState as string}</ErrorMessage> : ''}

            {/* add hidden username field for accessibility */}
            {isUname ? <input type='username' hidden /> : undefined}
            <TextInput state={input1.state} type={input1.type} autocomplete={input1.autocomplete}>
                {input1.label}
            </TextInput>

            <TextInput state={input2.state} type={input2.type} autocomplete={input2.autocomplete}>
                {input2.label}
            </TextInput>
            <GDisclaimer />

            <div style={{ position: 'absolute', left: '20px', bottom: '20px' }}>
                <Icon icon='fa-angle-left' onClick={back} />
            </div>

            <div style={{ margin: 'auto', width: 'fit-content' }}>
                {button.loading ? (
                    <LoadingButton onClick={button.onClick} loadState={button.loading} submit={true}>
                        {button.label}
                    </LoadingButton>
                ) : (
                    <Button onClick={button.onClick}>{button.label} </Button>
                )}
            </div>

            {help ? (
                <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
                    <Icon icon='fa-question' onClick={help} />
                </div>
            ) : (
                ''
            )}
        </form>
    )
}

export default Form
