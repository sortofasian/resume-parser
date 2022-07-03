import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { UserContext } from '../App'
import Button from '../components/Button'
import Header from '../components/Header'
import LoadingButton from '../components/LoadingButton'
import Submission from '../components/Submission'
import useSubmit from '../hooks/useSubmit'

function Profile() {
    // State

    /// User state
    const [user, setUser] = useContext(UserContext)

    /// Load state
    const [loading, setLoading] = useState({ loading: false, error: false } as IsLoading)

    // Hooks
    const navigate = useNavigate() /// Navigate

    const submit = useSubmit('/users/logout', setLoading)

    // Logout logic
    const logout = async () => {
        setUser({
            loggedIn: false,
            first: '',
            last: '',
            uid: ''
        })
        await submit({})

        navigate('/')
    }

    return (
        <>
            <Header>{user.first + ' ' + user.last}</Header>

            <Button onClick={() => navigate('/submit')} wide={true}>
                New Submission
            </Button>

            <ListContainer>
                <ScrollingList>
                    <ListItem>
                        <Submission />
                    </ListItem>
                    <ListItem>
                        <Submission />
                    </ListItem>
                    <ListItem>
                        <Submission />
                    </ListItem>
                    <ListItem>
                        <Submission />
                    </ListItem>
                    <ListItem>
                        <Submission />
                    </ListItem>
                    <ListItem>
                        <Submission />
                    </ListItem>
                    <ListItem>
                        <Submission />
                    </ListItem>
                    <ListItem>
                        <Submission />
                    </ListItem>
                    <ListItem>
                        <Submission />
                    </ListItem>
                    <ListItem>
                        <Submission />
                    </ListItem>
                    <ListItem>
                        <Submission />
                    </ListItem>
                    <ListItem>
                        <Submission />
                    </ListItem>
                </ScrollingList>
                <ListShadow />
            </ListContainer>

            <div style={{ height: '40px' }}>
                <Button onClick={() => navigate('/account')} position='left'>
                    Account
                </Button>

                <LoadingButton onClick={logout} loadState={loading} position='right'>
                    Logout
                </LoadingButton>
            </div>
        </>
    )
}
const ListItem = styled.div`
    position: static;
    width: 100%;
    height: fit-content;
    left: 10px;
    top: 10px;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 5px 0;

    &:first-child {
        margin-top: 20px;
    }
    &:last-child {
        margin-bottom: 20px;
    }
`

const ListShadow = styled.div`
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 220px;
    left: 0px;

    box-shadow: 0px 0px 5px 10px white inset;
`
const ScrollingList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 20px;

    position: absolute;
    width: 100%;
    height: 220px;
    left: 0px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
    box-shadow: 0px 0px 10px white inset;
`
const ListContainer = styled.div`
    height: 220px;
    margin: 20px 0px;
    margin-top: 15px;
`

export default Profile
