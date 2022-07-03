import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../App'
import Button from '../components/Button'
import Header from '../components/Header'
import Icon from '../components/Icon'

function Account() {
    const user = useContext(UserContext)[0]
    const navigate = useNavigate()

    return (
        <>
            <Header>{user.first + ' ' + user.last}</Header>

            <Button onClick={() => console.log('change the email')} wide={true} marginBottom='20px'>
                Change Email
            </Button>

            <Button onClick={() => console.log('reset password')} wide={true} marginBottom='20px'>
                Reset Password
            </Button>

            <div style={{ position: 'absolute', left: '20px', bottom: '20px' }}>
                <Icon icon='fa-angle-left' onClick={() => navigate('/profile')} />
            </div>

            <div style={{ margin: 'auto', width: 'fit-content' }}>
                <Button onClick={() => navigate('/delete')} color='#BD5D5D'>
                    Delete Account
                </Button>
            </div>
        </>
    )
}

export default Account
