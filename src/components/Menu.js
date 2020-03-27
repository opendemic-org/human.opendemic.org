import React from "react";
import { Button } from "@blueprintjs/core";

import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  z-index: 2;
`;
const ButtonContainer = styled.div`
`;

export default function Menu() {
  return (
    <Container>
    <ButtonContainer>
      <Button>
        Cases Near Me
      </Button>
    </ButtonContainer>
    <ButtonContainer>
      <Button>
        Log Symptoms
      </Button>
    </ButtonContainer>
    </Container>
  );
}