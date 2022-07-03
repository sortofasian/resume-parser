import React, { SetStateAction, useEffect, useLayoutEffect, useState } from 'react'
import { Navigate, useLocation, useRoutes } from 'react-router-dom'
import { load, ReCaptchaInstance } from 'recaptcha-v3'
import styled from 'styled-components'

import Background from './components/Background'
import useSession from './hooks/useSession'
import Account from './pages/Account'
import Forgot from './pages/Forgot'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register/Register'
import Status from './pages/Status'
import Submit from './pages/Submit'
import Verify from './pages/Verify'

const EmptyUser: User = {
    loggedIn: false,
    first: '',
    last: '',
    uid: ''
}

export const CaptchaContext = React.createContext<Promise<ReCaptchaInstance>>(
    load(process.env.REACT_APP_RECAPTCHA_SITE_KEY as string)
)
export const UserContext = React.createContext<[User, React.Dispatch<SetStateAction<User>>]>([
    EmptyUser,
    () => {}
])

function App() {
    const [user, setUser] = useState(EmptyUser)

    const check = useSession()
    const checksession = async () => {
        try {
            const sessionUser = await check()

            setUser({
                loggedIn: true,
                first: sessionUser.first,
                last: sessionUser.last,
                uid: sessionUser.uid
            })
        } catch (e) {
            setUser(EmptyUser)
            console.log(e)
        }
    }

    /// If user is not logged in go home
    useEffect(() => {
        checksession()
    }, [])

    // Check session on location change
    const location = useLocation()
    useLayoutEffect(() => {
        checksession()
    }, [location.pathname])

    const notLoggedInPaths = [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/forgot', element: <Forgot /> }
    ]
    const loggedInPaths = [
        { path: '/profile', element: <Profile /> },
        { path: '/account', element: <Account /> },
        { path: '/submit', element: <Submit /> },
        { path: '/verify', element: <Verify /> },
        { path: '/status', element: <Status /> }
    ]

    const notLoggedInRoutes: { path: string; element: JSX.Element }[] = []
    const loggedInRoutes: { path: string; element: JSX.Element }[] = []

    notLoggedInPaths.forEach((route) => {
        notLoggedInRoutes.push(route)
        loggedInRoutes.push({ path: route.path, element: <Navigate replace={true} to='/profile' /> })
    })
    loggedInPaths.forEach((route) => {
        loggedInRoutes.push(route)
        notLoggedInRoutes.push({ path: route.path, element: <Navigate replace={true} to='/' /> })
    })

    const NotLoggedIn = () => useRoutes(notLoggedInRoutes)
    const LoggedIn = () => useRoutes(loggedInRoutes)

    return (
        <UserContext.Provider value={[user, setUser]}>
            <Root>
                <Background>{user.loggedIn ? <LoggedIn /> : <NotLoggedIn />}</Background>
            </Root>
        </UserContext.Provider>
    )
}

export default App
const Root = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
        'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    box-sizing: border-box !important;
    margin: auto;
    margin-top: 20px;
    width: fit-content;
`
