import React from 'react'
import styled from 'styled-components'

type Props = { children: React.ReactNode }
function Header({ children }: Props) {
    return <Root>{children}</Root>
}

export default Header

const Root = styled.div`
    width: 200px;
    height: 30px;
    margin: auto;
    margin-bottom: 20px;

    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    text-align: center;

    color: #000000;

    text-shadow: 0px 4px 10px rgba(0, 5, 0, 0.25);

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
`
