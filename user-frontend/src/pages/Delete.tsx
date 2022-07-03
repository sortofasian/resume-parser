import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../components/Header'
import Icon from '../components/Icon'
import LoadingButton from '../components/LoadingButton'

function Delete() {
    const [loading, setLoading] = useState({ loading: false, error: false } as IsLoading)
    const navigate = useNavigate()

    return (
        <>
            <Header>Are you sure?</Header>
            <p>Deleting your account is permanent and any submissions will be removed</p>

            {loading.loading ? undefined : (
                <div style={{ position: 'absolute', left: '20px', bottom: '20px' }}>
                    <Icon icon='fa-angle-left' onClick={() => navigate('/account')} />
                </div>
            )}

            <div style={{ margin: 'auto', width: 'fit-content' }}>
                <LoadingButton
                    loadState={loading}
                    onClick={() => {
                        console.log('DELETE ACCOUNT1!!!11!1')
                        setLoading({ loading: true, error: false })
                    }}
                    color='#BD5D5D'
                >
                    Confirm
                </LoadingButton>
            </div>
        </>
    )
}

export default Delete
