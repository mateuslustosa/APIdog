import React, { useState } from 'react'
import axios from 'axios'

export default function App() {

  const [dog, setDog] = useState()
  const [status, setStatus] = useState(false)

function getDog(){
 axios.get('https://dog.ceo/api/breeds/image/random').then((response) =>{
   console.log(response.data.message)
   setDog(response.data.message)
   setStatus(true)
 })
}

  return (
    <>
    <button onClick={() =>{getDog()}}>Clique</button>
   { status   &&  <img src={dog} alt='doguinho'/> }
    </>
  );
}
