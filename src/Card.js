import React from 'react'
import { useState, useEffect } from 'react'; 
import { useSpring, animated, config } from 'react-spring';
import PubSub from 'pubsub-js';
import * as Sty  from './compoments'


const AnimatedCardFront = animated(Sty.CardFront)
const AnimatedCardBack = animated(Sty.CardBack)


export default function Card(props) {

    useEffect(()=>{
        const token = PubSub.subscribe('nanisuits',(_,suits)=>{
            setSuitsData(suitsData.suits = suits)
        });
        return ()=> {
            PubSub.unsubscribe(token)
        }
    })

    const {num} = props
    const [isFlip, setIsFlip] = useState(false);
    const [suitsData, setSuitsData] = useState({suits:'♠'});
    const {suits} = suitsData;


    const handleClick = ()=>{
        setIsFlip(!isFlip);
    }
    const {opacity, transform} = useSpring({
        opacity: isFlip ? 1 : 0,
        transform: `perspective(300px) rotateY(${isFlip ? 0 : 180}deg)`,
        config: config.wobbly
    })
    return (
        <div>
            <Sty.CardWrapper onClick={handleClick}>
                <AnimatedCardBack style={{
                    opacity: opacity.to(o=> 1-o),
                    transform: transform.to(t=> `${t} rotateY(180deg)`)
                    }}/>
                <AnimatedCardFront style={{opacity,transform}}>
                    <span style={{color: suits === '♥'|| suits === '♦' ? 'red' : 'black'}}>{num}</span>
                    <span style={{color: suits === '♥'|| suits === '♦' ? 'red' : 'black'}}>{suits}</span>
                    <span style={{color: suits === '♥'|| suits === '♦' ? 'red' : 'black'}}>{num}</span>
                </AnimatedCardFront>
            </Sty.CardWrapper>
        </div>
    )
}
