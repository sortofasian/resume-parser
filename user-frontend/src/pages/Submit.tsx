import React, { BaseSyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'
import Icon from '../components/Icon'
import LoadingButton from '../components/LoadingButton'
import useSubmit from '../hooks/useSubmit'

function Submit() {
    // State

    /// File state
    const [file, setFile] = useState({ name: 'Upload a file', data: '' })

    /// Load state
    const [loading, setLoading] = useState({ loading: false, error: false } as IsLoading)

    // Hooks
    const navigate = useNavigate()
    const submit = useSubmit('/resumes/submit', setLoading)

    const handleFile = async (event: BaseSyntheticEvent) => {
        event.preventDefault()
        const resume = event.target.files[0]

        // Promisify read then await b64 string
        const b64file = (await new Promise((resolve, reject) => {
            // Create fileReader
            const reader = new FileReader()

            // Convert to base64
            reader.readAsDataURL(resume)
            reader.onload = () => {
                resolve((reader.result as string).split(',').pop() as string)
            }
            reader.onerror = () => {
                console.log("Couldn't read file")
                reject(reader.error)
            }
        })) as string

        setFile({ name: resume.name, data: b64file })
    }

    const handleSubmit = () => {
        submit(file)
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Header>Submit a resume</Header>
            <FileUpload>
                <Label>
                    {file.name}
                    <input type='file' hidden onChange={(e) => handleFile(e)} />
                </Label>
            </FileUpload>

            <div style={{ position: 'absolute', left: '20px', bottom: '20px' }}>
                <Icon icon='fa-angle-left' onClick={() => navigate('/profile')} />
            </div>

            <div style={{ margin: 'auto', width: 'fit-content' }}>
                <LoadingButton
                    loadState={loading}
                    onClick={() => {
                        handleSubmit()
                        navigate('/verify')
                    }}
                >
                    Submit
                </LoadingButton>
            </div>
        </form>
    )
}

const FileUpload = styled.div`
    position: relative;
    width: 100%;
    height: 40px;
    padding: 0px;
    margin-bottom: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
`
const Label = styled.label`
    position: relative;
    height: 100%;
    width: 100%;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 225%;
    text-align: center;

    color: #000000;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
`
export default Submit
