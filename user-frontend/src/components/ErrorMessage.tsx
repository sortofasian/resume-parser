import React from 'react'
import styled from 'styled-components'

type Props = { children: string }

function ErrorMessage({ children }: Props) {
    return <Root>{children}</Root>
}

const Root = styled.div`
    color: #bd5d5d;
    position: relative;
    height: fit-content;
    width: 200px;

    padding: 10px 20px;
    padding-top: 0px;

    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
`

export default ErrorMessage
