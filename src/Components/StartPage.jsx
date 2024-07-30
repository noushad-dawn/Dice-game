import React from 'react'
import styled from 'styled-components';
import {Button} from './styled/button'

const MainBody = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .contents {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
    display:flex;
    flex-direction:column;
    align-items:end;
  }
`;



const StartPage = ({toggle}) => {
    return (
        <>
            <MainBody>
                <div>
                    <img src='./images/dices.png' alt='logo'/>
                </div>
                <div className='contents'>
                    <h1>DICE GAME</h1>
                    <Button onClick={toggle}>Play Now</Button>
                </div>
            </MainBody>
        </>
    )
}



export default StartPage;