import React from 'react';
import styled from 'styled-components';

const ComingSoonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.white};
  cursor: pointer;
`;

function ComingSoonPage() {
  return (
    <ComingSoonContainer>
      <Heading>Coming Soon!</Heading>
      <Text>Our new website will allow you to place furniture and textiles within your house using a VR feature. We can't wait to share it with you!</Text>
      <StyledButton>Back to KUALAmate</StyledButton>
    </ComingSoonContainer>
  );
}

export default ComingSoonPage;
