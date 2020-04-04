import React from "react";
import { Spinner } from "@blueprintjs/core";
import { useSelector } from "react-redux";
import styled from "styled-components";

const size = "40px";

export default function Loader() {
  const isVisible = useSelector((st) => st.loader.isVisible);
  const value = useSelector((st) => st.loader.value);

  return (
    <Container>
      {isVisible && <Spinner size={size} value={value && value} />}
    </Container>
  );
}

const Container = styled.div`
  margin: auto;
  position: fixed;
  text-align: center;
  z-index: 3;
`;
