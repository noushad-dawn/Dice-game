import React from 'react';
import styled from 'styled-components';

const NumberSelecor = ({ setError,error,selectedNumber, setSelectedNumber }) => {
  const arr = [1, 2, 3, 4, 5, 6];

  const NumberSelecorHandler=(value)=>{
    setSelectedNumber(value);
    setError("");
  }

  return (
    <NumberSelecorContainer>
      <p className='error'>{error}</p>
      <div className="flex">
        {arr.map((value, i) => (
          <Box
            key={i}
            isSelected={value === selectedNumber}
            onClick={() => {
              NumberSelecorHandler(value);
            }}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelecorContainer>
  );
};

export default NumberSelecor;

const NumberSelecorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
    .error{
    color:red;
    }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (!props.isSelected ? 'black' : 'white')};
  cursor: pointer;
`;
