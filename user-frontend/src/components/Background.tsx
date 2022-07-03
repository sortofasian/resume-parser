import React from 'react'
import styled from 'styled-components'

type Props = { children: React.ReactNode }

function Background({ children }: Props) {
    return <Root>{children}</Root>
}

export default Background

const Root = styled.div`
    position: relative;
    width: 330px;
    padding: 20px;

    background: #fff;
    box-shadow: 0 25px 50px 5px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
`
