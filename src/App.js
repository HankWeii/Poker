import React from 'react';
// import { useState } from 'react'; 
// import { useSpring, animated, config } from 'react-spring';
// import styled from 'styled-components'
import * as Sty  from './compoments'
import Card from './Card';
import './App.css'




export default function App() {

  return (
    <Sty.Container>
      <Card num='A'suits='♠'></Card>
      <Card num='2'suits='♠'></Card>
      <Card num='3'suits='♠'></Card>
      <Card num='4'suits='♠'></Card>
      <Card num='5'suits='♠'></Card>
      <Card num='6'suits='♠'></Card>
    </Sty.Container>
  )
}


