import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

import Button from './Button'

type Props = {
    loadState: IsLoading
    onClick: () => void
    children: React.ReactNode
    wide?: boolean
    position?: 'left' | 'right'
    submit?: boolean
    marginBottom?: string
    color?: string
}

function LoadingButton({ loadState, onClick, children, wide, position, submit, marginBottom, color }: Props) {
    return loadState.loading ? (
        <IconContainer>
            <Translate>
                <Rotate>
                    <Icon className='fas fa-sailboat' />
                </Rotate>
            </Translate>
        </IconContainer>
    ) : (
        <Button
            onClick={onClick}
            wide={wide}
            position={position}
            submit={submit}
            marginBottom={marginBottom}
            color={color}
        >
            {children}
        </Button>
    )
}

export default LoadingButton

const IconContainer = styled.div`
    position: relative;
    display: flex;
    width: 90px;
    height: 40px;
    align-items: center;
    justify-content: center;
`
const Icon = styled.i`
    color: steelblue;
    border: 1px transparent;
    font-size: 1.5em;

    transition: border 0.2s ease-in, background-color 0.2s ease-in;
`

const BoatTranslate = keyframes`
        from {
            transform: translate(0px, -4px);

            animation-timing-function: ease-in;
        }
        34.55% {
            transform: translate(2px, 2px);
        }
        50% {
            transform: translate(0px, 4px)
        }
        65.45% {
            transform: translate(-2px, 2px);

            animation-timing-function: ease-out;
        }
        to {
            transform: translate(0px, -4px);
        }

`

const BoatRotate = keyframes`
        from {
            transform: rotate(0deg);

            animation-timing-function: ease-in;
        }
        25.92% {
            transform: rotate(5deg);
        }
        34.55% {
            transform: rotate(2.5deg);
        }
        50% {
            transform: rotate(0deg);
        }
        65.45% {
            transform: rotate(-2.5deg);
        }
        74.08% {
            transform: rotate(-5deg);
            animation-timing-function: ease-out;
        }
        to {
            transform: rotate(0deg);
        }

`
const Translate = styled.div`
    animation: ${BoatTranslate} 1.5s linear infinite;
`
const Rotate = styled.div`
    animation: ${BoatRotate} 1.5s linear infinite;
`
