import React from 'react'

export {}

declare global {
    // State

    /// Loading
    type LoadState = [IsLoading, React.Dispatch<React.SetStateAction<IsLoading>>]
    type IsLoading = {
        loading: boolean
        error: boolean | string
    }

    /// Text field
    type TextState = [string, React.Dispatch<React.SetStateAction<string>>]

    //Server responses

    /// Error
    type ServerError = { error: string }

    /// User object
    type User = { loggedIn: boolean; first: string; last: string; uid: string }
}
