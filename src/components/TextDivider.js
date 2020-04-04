import React from "react";
import { Divider } from "@blueprintjs/core";
import styled from "styled-components";

export default function TextDivider(props) {
  return (
    <Container>
      <Span>
        <Divider />
      </Span>
      <Text>{props.text}</Text>
      <Span>
        <Divider />
      </Span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Span = styled.span`
  width: 100%;
`;

const Text = styled.span``;
