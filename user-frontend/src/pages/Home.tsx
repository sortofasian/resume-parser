import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../components/Button'
import Header from '../components/Header'

function Home() {
    // Hooks
    const navigate = useNavigate()

    return (
        <>
            <Header>Submit your resume</Header>

            <Icon className={'fa-solid fa-file'} />

            <div style={{ height: '40px' }}>
                <Button onClick={() => navigate('/login')} position='left'>
                    Login
                </Button>

                <Button onClick={() => navigate('/register')} position='right'>
                    Register
                </Button>
            </div>
        </>
    )
}

const Icon = styled.i`
    color: steelblue;
    border: 1px transparent;
    font-size: 30px;
    height: 30px;
    width: 30px;
    margin-bottom: 20px;
`

export default Home
