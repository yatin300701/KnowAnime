import React from 'react'
import Body from '../components/Body'
import NavbarComp from '../components/NavbarComp'
import { useEffect, useState } from 'react';    
import ScrollBar from '../components/ScrollBar'

export default function Homepage() {
    const [topanime, settopanimes] = useState([])
  const [randomanime, setRandomanime] = useState([])

  useEffect( () => {
    fetch("https://api.jikan.moe/v4/top/anime?limit=6").then(re=>re.json())
    .then(res=>{
      settopanimes(res.data)
      console.log(topanime)
    });
    
    fetch("https://api.jikan.moe/v4/watch/episodes?limit=10").then(re=>re.json())
    .then(res=>{
      setRandomanime(res.data)
    });

    

   },[] )
  
  return (
    <>
       
        <ScrollBar topanime={topanime}/>
        <Body randomanime={randomanime} topanime={topanime}/>
    </>
  )
}
