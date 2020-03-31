import React, { useState } from "react";
import styled from "styled-components";

import Map from "../components/Map";
import Menu from "../components/Menu";
import SymptomsFormContainer from "../components/SymptomsFormContainer";

export default function Home() {
  const [showSymptomsForm, setShowSymptomsForm] = useState(false);

  function openForm() {
    setShowSymptomsForm(true);
  }

  function closeForm() {
    setShowSymptomsForm(false);
  }

  return (
    <Container>
      <Menu openForm={openForm} />
      {showSymptomsForm && <SymptomsFormContainer close={closeForm} />}
      <Map />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;
