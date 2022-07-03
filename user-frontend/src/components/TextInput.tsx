import React from 'react'
import styled from 'styled-components'

type Props = {
    state: [string, (value: string) => void]
    children: string
    type?: string
    autocomplete?: string
}

function TextInput({ state, children, type, autocomplete }: Props) {
    const [value, setValue] = state
    return (
        <Input
            value={value}
            placeholder={children}
            onChange={(event) => setValue(event.target.value)}
            type={type}
            autoComplete={autocomplete}
        />
    )
}

export default TextInput

const Input = styled.input`
    all: inherit;

    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    padding: 2px 15px;
    padding-top: 0px;

    background #fff;
    box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 20px;

    text-align: left;
    
    &:last-of-type {
        margin-bottom: 20px;
    }

    &:focus &:focus-visible {  
        border: none;
    }
`
