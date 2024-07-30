import React, { useState } from 'react'
import './App.css'
import StartPage from './Components/StartPage';
import PlayPage from './Components/PlayPage';

const App = () => {

  const [isSelected,SetIsSelected] = useState(false);
  const togglePlay =()=>{
    SetIsSelected((prev)=>!prev);
  }
  return (
   <>
   {isSelected ? <PlayPage/> : <StartPage toggle={togglePlay}/>}
   </>
  )
}

export default App;