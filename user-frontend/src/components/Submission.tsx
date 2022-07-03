import React from 'react'
import styled from 'styled-components'

const notReviewed = { color: '#7D7D7D', status: 'Not reviewed' }

function Submission() {
    return (
        <Root onClick={() => console.log('open submission')}>
            <Details>
                <Name>Charles_Syvertsen.pdf</Name>
                <Status color={notReviewed.color}>{notReviewed.status}</Status>
            </Details>
            <Thumbnail src='/Thumbnail.png' alt='Resume preview' />
        </Root>
    )
}

type StatusProps = {
    color?: string
}

const Name = styled.div`
    font-weight: 500;
    font-size: 16px;
`

const Status = styled.div<StatusProps>`
    color: ${(props) => props.color};
`

const Details = styled.div`
    position: absolute;
    left: 15px;
    top: 15px;
    width: calc(79% - 15px);
    text-align: left;
`

const Thumbnail = styled.img`
    position: absolute;
    right: 0px;
    height: 100%;
    width: 21%;
    border-radius: 0px 11px 11px 0px;
`

const Root = styled.div`
    position: relative;
    width: 100%;
    height: 80px;

    background: #ffffff;
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
`
export default Submission
