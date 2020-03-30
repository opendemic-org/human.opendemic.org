import React from "react";

import Map from "../components/Map";
import Menu from "../components/Menu";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Menu />
      <Map />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
