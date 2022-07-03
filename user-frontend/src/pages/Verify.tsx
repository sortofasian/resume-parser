import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'
import Icon from '../components/Icon'
import LoadingButton from '../components/LoadingButton'
import useSubmit from '../hooks/useSubmit'

function Verify() {
    const maxCards = 2

    // State
    const [card, setCard] = useState(0)
    const [scrolling, setScrolling] = useState<false | ReturnType<typeof setTimeout>>(false)

    /// Loading state
    const [loading, setLoading] = useState({ loading: false, error: false } as IsLoading)

    /// Submit

    // Hooks
    const navigate = useNavigate()
    const submit = useSubmit('/resumes/submit', setLoading)

    /// When card changes, scroll to position in carousel
    const hScroll = useRef<HTMLDivElement>(null)
    const scrollToCard = (card: number) => {
        if (null !== hScroll.current) {
            setCard(card)
            hScroll.current.scrollTo({ left: 277 * card, behavior: 'smooth' })
        }
    }

    const handleSubmit = () => {
        submit({}) // add submission id
    }

    return (
        <>
            <Header>Verify Info</Header>
            <Spacer>
                <div
                    style={{
                        position: 'absolute',
                        left: '5px',
                        bottom: '0',
                        top: '0',
                        display: card === 0 ? 'none' : ''
                    }}
                >
                    <Icon
                        icon='fa-angle-left'
                        onClick={() => {
                            scrollToCard(card - 1)
                        }}
                        background='rgba(0,0,0,0)'
                        shadow='none'
                        height='calc(100% - 20px)'
                    />
                </div>

                <div
                    style={{
                        position: 'absolute',
                        right: '5px',
                        top: '0',
                        bottom: '0',
                        display: card === maxCards ? 'none' : ''
                    }}
                >
                    <Icon
                        icon='fa-angle-right'
                        onClick={() => {
                            scrollToCard(card + 1)
                        }}
                        background='rgba(0,0,0,0)'
                        shadow='none'
                        height='calc(100% - 20px)'
                    />
                </div>

                <HScroll
                    ref={hScroll}
                    onScroll={() => {
                        if (scrolling) {
                            clearTimeout(scrolling) // If div is stills scrolling, remove timeout
                        }

                        // Create new timeout and set current card if 50ms passes without a timeout reset
                        setScrolling(
                            setTimeout(() => {
                                if (hScroll.current !== null) {
                                    setCard(Math.round(hScroll.current.scrollLeft / 277))
                                    setScrolling(false)
                                }
                            }, 50)
                        )
                    }}
                >
                    <InfoCard>
                        <h2>Skills</h2>
                    </InfoCard>
                    <InfoCard>
                        <h2>Skills</h2>
                    </InfoCard>
                    <InfoCard>
                        <h2>Skills</h2>
                    </InfoCard>
                </HScroll>
            </Spacer>
            <div style={{ margin: 'auto', width: 'fit-content' }}>
                <LoadingButton
                    loadState={loading}
                    onClick={() => {
                        handleSubmit()
                        navigate('/profile')
                    }}
                >
                    Submit
                </LoadingButton>
            </div>
        </>
    )
}

const InfoCard = styled.div`
    width: 100%;
    height: calc(100% - 40px);

    scroll-snap-align: start;

    background: #ffffff;

    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
`
const HScroll = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 100%);
    grid-template-rows: 100%;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding: calc(20px + 5%);
    align-items: center;
    padding: 0 calc(20px + 5%);

    height: 100%;
    width: 100%;
`
const Spacer = styled.div`
    position: relative;
    height: 300px;
    width: calc(100% + 40px);
    margin: 0 -20px;
    margin-top: -20px;
    margin-bottom: 15px;
`

export default Verify
