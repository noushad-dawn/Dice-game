import React from 'react'
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelecor from './NumberSelecor';
import {Button,OutlineButton} from './styled/button'
import RollDice from './RollDice';
import { useState } from "react";
import Rules from './Rules';



const PlayPage = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError] =useState("");
  const [showRules, setShowRules] = useState(false);


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const resetScore=()=>{
    setScore(0);
  }
  const roleDice = () => {
    if(!selectedNumber) {
      setError("You have not selected any number")
      return;
    };
    
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if(selectedNumber===randomNumber){
      setScore((prevScore)=>prevScore + randomNumber);
    }else{
     if(score>0){
      setScore((prevScore)=>prevScore-2)
     }
    }
    setSelectedNumber(undefined);
  };

  return (
    <>  
     <MinaContainer>
     <div className='top_section'>
     <TotalScore score={score}/>
     <NumberSelecor
     setError={setError}
     error={error}
     selectedNumber={selectedNumber}
     setSelectedNumber={setSelectedNumber}
     />
     </div>
     <RollDice currentDice={currentDice}
     roleDice={roleDice}
     />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
     </MinaContainer>
      </>
  )
}

export default PlayPage;

const MinaContainer =styled.div`

 
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;