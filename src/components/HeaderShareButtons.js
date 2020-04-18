import React, { Fragment, useState } from "react";
import { Icon } from "@blueprintjs/core";
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LineShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";

import ShareModal from "./ShareModal";

const SHARE_URL = "https://human.opendemic.org";
const SHARE_QUOTE =
  "See confirmed COVID-19 cases near you on Opendemic. Please #stayhome and stay safe!";

export default function HeaderShareButtons(props) {
  const iconSize = props.iconSize || 24;

  const linkIconSize = iconSize * 0.75;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleLinkClick() {
    setModalIsOpen(true);
  }

  return (
    <Fragment>
      {modalIsOpen && <ShareModal close={closeModal} />}
      <ShareContainer>
        {/* facebook */}
        {!props.isMobile && (
          <ShareButton spaceAround={!props.isHeader}>
            <FacebookShareButton url={SHARE_URL} quote={SHARE_QUOTE}>
              <FacebookIcon size={iconSize} round />
            </FacebookShareButton>
          </ShareButton>
        )}
        {/* twitter */}
        <ShareButton spaceAround={!props.isHeader}>
          <TwitterShareButton url={SHARE_URL} title={SHARE_QUOTE}>
            <TwitterIcon size={iconSize} round />
          </TwitterShareButton>
        </ShareButton>
        {/* whatsapp */}
        {!props.isMobile && (
          <ShareButton spaceAround={!props.isHeader}>
            <WhatsappShareButton url={SHARE_URL} quote={SHARE_QUOTE}>
              <WhatsappIcon size={iconSize} round />
            </WhatsappShareButton>
          </ShareButton>
        )}
      </ShareContainer>
      {props.isHeader && (
        <ShareButton className="od-cursor-pointer">
          <Icon
            icon={"link"}
            iconSize={linkIconSize}
            onClick={handleLinkClick}
          />
        </ShareButton>
      )}
    </Fragment>
  );
}

const ShareButton = styled.span`
  margin-left: 10px;
  ${(props) =>
    props.spaceAround &&
    css`
      margin-left: 5px;
      margin-right: 5px;
    `}
`;

const ShareContainer = styled.span`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
