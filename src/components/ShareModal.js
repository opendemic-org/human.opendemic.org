import React, { useRef, useState } from "react";
import {
  Alert,
  Dialog,
  Drawer,
  Overlay,
  Position,
  H4,
  InputGroup,
  Tag,
} from "@blueprintjs/core";
import { useIntl } from "react-intl";
import styled from "styled-components";

import HeaderShareButtons from "./HeaderShareButtons";

import { ids } from "../lib/localized/strings";

const SHARE_URL = "https://human.opendemic.org";

export default function ShareModal(props) {
  const { formatMessage: fm } = useIntl();

  const [isOpen, setIsOpen] = useState(true);

  const [copied, setCopied] = useState(false);

  const copyRef = useRef(null);

  function onClose() {
    setIsOpen(false);
    props.close();
  }

  function renderCopyButton() {
    return (
      <Tag minimal={!copied}>
        {copied ? fm({ id: ids.COPIED }) : fm({ id: ids.COPY })}
      </Tag>
    );
  }

  function handleCopy() {
    copyRef.current.select();
    document.execCommand("copy");
    setCopied(true);
  }

  return (
    <Drawer
      icon="share"
      autoFocus={true}
      canEscapeKeyClose={true}
      canOutsideClickClose={true}
      enforceFocus={true}
      hasBackdrop={true}
      isOpen={isOpen}
      onClose={onClose}
      position={Position.BOTTOM}
      size={Drawer.SIZE_SMALL}
      vertical={true}
    >
      <ShareContainer>
        <ShareHeaderContainter>
          <H4>{`${fm({ id: ids.SHARE }, { noun: "Opendemic" })}`}</H4>
        </ShareHeaderContainter>
        <HeaderShareButtons iconSize={44} isHeader={false} />
        <CopyBox onClick={handleCopy}>
          <InputGroup
            className={"od-input-group"}
            inputRef={copyRef}
            large={true}
            rightElement={renderCopyButton()}
            value={SHARE_URL}
          ></InputGroup>
        </CopyBox>
      </ShareContainer>
    </Drawer>
  );
}

const ShareHeaderContainter = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ShareContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
`;

const CopyBox = styled.div`
  margin-top: 20px;
  width: auto;
`;
