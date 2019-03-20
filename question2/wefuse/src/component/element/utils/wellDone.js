import React from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import { Container } from 'react-grid-system';
import './styles/wellDone.css';
function Confett(){
  const { width, height } = useWindowSize()
  return (
    <div class="container wellCon">
    <Container>
          <Confetti
      width={'300px'}
      height={'240px'}
    />
    </Container>
    </div>
  )
}

export default Confett;