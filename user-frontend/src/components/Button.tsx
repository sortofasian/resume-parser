import React from 'react'
import styled from 'styled-components'

type Props = {
    onClick: () => void
    children: React.ReactNode
    className?: string
    wide?: boolean
    position?: 'left' | 'right'
    submit?: boolean
    marginBottom?: string
    color?: string
}

function Button({ onClick, children, className, wide, position, submit, marginBottom, color }: Props) {
    const button = (
        <Root className={className} wide={wide} side={position} marginBottom={marginBottom} color={color}>
            <Label>
                {children}
                <button
                    onClick={onClick}
                    type={submit ? 'submit' : undefined}
                    style={{ visibility: 'hidden', position: 'absolute' }}
                />
            </Label>
        </Root>
    )

    return position ? <SidedWrapper side={position}>{button}</SidedWrapper> : button
}

export default Button

type Side = { side?: 'left' | 'right' }
const SidedWrapper = styled.div<Side>`
    position: absolute;
    left: ${(props) => (props.side === 'left' ? '20px' : '50%')};
    right: ${(props) => (props.side === 'left' ? '50%' : '20px')};
`

type RootProps = {
    wide?: boolean
    side?: 'left' | 'right'
    marginBottom?: string
    color?: string
}
const Root = styled.div<RootProps>`
    z-index: 10;
    position: relative;
    width: ${(props) => (props.wide === true ? '100%' : '135px')};
    height: 40px;
    padding: 0px;
    margin-left: ${(props) => (props.side === 'left' ? '0px' : 'auto')};
    margin-right: ${(props) => (props.side === 'left' ? 'auto' : '0px')};
    margin-bottom: ${(props) => props.marginBottom};

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => (props.color ? props.color : '#7fc5e2')};
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
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
