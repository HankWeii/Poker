import React from 'react'
import { useState } from 'react';
import { Radio } from 'antd'
import PubSub from 'pubsub-js';
import './Chose.css'



export default function Chose() {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
    setValue(e.target.value);
    PubSub.publish('nanisuits',{suits: e.target.value})
    };
    
  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio className='suits' value='♠'>♠</Radio>
      <Radio className='suits' value='♥'>♥</Radio>
      <Radio className='suits' value='♦'>♦</Radio>
      <Radio className='suits' value='♣'>♣</Radio>
    </Radio.Group>
  );
};
