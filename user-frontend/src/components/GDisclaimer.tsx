import React from 'react'
import styled from 'styled-components'

function GDisclaimer() {
    return (
        <Root>
            Protected by reCAPTCHA v3
            <br />
            Google <a href='https://policies.google.com/privacy'>PP</a> and{' '}
            <a href='https://policies.google.com/terms'>ToS</a> apply.
        </Root>
    )
}

const Root = styled.div`
    margin-top: -10px;
    margin-bottom: 20px;
`
export default GDisclaimer
