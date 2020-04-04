import React from "react";
import { Spinner } from "@blueprintjs/core";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Loader() {
  const isVisible = useSelector((st) => st.loader.isVisible);
  const value = useSelector((st) => st.loader.value);

  return (
    <Container>
      {isVisible && (
        <Spinner
          size={Spinner.SIZE_STANDARD}
          value={value && value}
          intent={"primary"}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
`;
