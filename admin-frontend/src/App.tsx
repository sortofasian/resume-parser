import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import Page from './Pages/Page'

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
`

function App() {
    return (
        <Root>
            <Routes>
                <Route path='/' element={<Page />} />
                <Route element={/* 404 */ undefined} />
            </Routes>
        </Root>
    )
}

export default App
