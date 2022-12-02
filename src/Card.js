import React from 'react'
import { useState } from 'react'; 
import { useSpring, animated, config } from 'react-spring';
import * as Sty  from './compoments'


const AnimatedCardFront = animated(Sty.CardFront)
const AnimatedCardBack = animated(Sty.CardBack)

export default function Card(props) {
    const {num, suits} = props
    const [isFlip, setIsFlip] = useState(false);
    
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
                    <span>{num}</span>
                    <span>{suits}</span>
                    <span>{num}</span>
                </AnimatedCardFront>
            </Sty.CardWrapper>
        </div>
    )
}
