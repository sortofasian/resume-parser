import React, { SyntheticEvent } from 'react'
import styled from 'styled-components'

type Props = {
    icon: string
    onClick: ((e: SyntheticEvent) => void) | (() => void)
    background?: string
    shadow?: string
    width?: string
    height?: string
}

function Icon({ icon, onClick, background, shadow, width, height }: Props) {
    return (
        <Root background={background} shadow={shadow} width={width} height={height}>
            <Button type='button' onClick={onClick}>
                <FAIcon className={'fa-solid fa-xl ' + icon} />
            </Button>
        </Root>
    )
}

export default Icon

type RootProps = { background?: string; shadow?: string; height?: string; width?: string }
const Root = styled.div<RootProps>`
    position: relative;
    width: ${(p) => (p.width ? p.width : '40px')};
    height: ${(p) => (p.height ? p.height : '40px')};

    border-radius: 25px;
    border: none;

    background: ${(p) => (p.background ? p.background : '#c4c4c4')};
    box-shadow: ${(p) => (p.shadow ? p.shadow : '0px 5px 15px 5px rgba(0, 0, 0, 0.1)')};
`
const Button = styled.button`
    background: transparent;
    border: none;
    width: 100%;
    height: 100%;
    padding: 0px;
`
const FAIcon = styled.i``
