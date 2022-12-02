import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #042813;
    background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png");
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const CardSize = styled.div`
    width: 130px;
    height: 210px;
`

export const CardWrapper = styled(CardSize)`
    position: fixed;
    top: 20%;
    user-select: none;
    position: relative;
`

const PokerDefault = styled(CardSize)`
    background-color: #f3f3f4;
    border-radius: 5px;
    position: absolute;
`

export const CardBack = styled(PokerDefault)`
    opacity: 1;
    background-image:  linear-gradient(135deg, #a90c08 25%, transparent 25%), linear-gradient(225deg, #a90c08 25%, transparent 25%), linear-gradient(45deg, #a90c08 25%, transparent 25%), linear-gradient(315deg, #a90c08 25%, #f3f3f4 25%);
    background-position:  17px 0, 17px 0, 0 0, 0 0;
    background-size: 17px 17px;
    background-repeat: repeat;
    border: 5px solid #ffffff;
`
export const CardFront = styled(PokerDefault)`
    display:flex;
    flex-direction: column;
    padding: 5px;
    & > span {
        font-size: 20px;
        font-family: sans-serif;
        font-weight: bold;
        color: black;
    }
    & > span:nth-child(2) {
        display: flex;
        flex: auto;
        justify-content: center;
        align-items: center;
        font-size: 50px;
    }
    & > span:last-child {
        transform: rotate(180deg);
    }
`