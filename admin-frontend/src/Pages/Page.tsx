import React from 'react'
import styled from 'styled-components'

import Component from '../Components/Component'
import { Service } from '../Services/Service'

function Page() {
    return (
        <Root>
            <Component />
            <Button onClick={() => Service({ data: 'data' })}>
                I run &quot;Service&quot; from service.tsx
            </Button>
        </Root>
    )
}

const Button = styled.button`
    position: absolute;
    bottom: 40px;
    left: 40px;
    height: 40px;
    width: 220px;
    border: none;
    border-radius: 50px;
    background: #99b3e5;
    box-shadow: 6px 6px 12px #8298c3, -6px -6px 12px #b0ceff;

    transition: background 0.3s ease-out;

    &:hover {
        background: #c1d0ec;
    }
`
const Root = styled.div`
    position: relative;
    margin: auto;
    width: 300px;
    height: 300px;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

    /* prevent top margin collapse */
    padding-top: 1px;
    margin-top: -1px;
`

export default Page
