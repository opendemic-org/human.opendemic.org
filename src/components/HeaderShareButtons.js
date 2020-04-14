import React, { Fragment, useState } from "react";
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
import { Icon } from "@blueprintjs/core";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import ShareModal from "./ShareModal";

import ModalActions from "../store/modal";

export default function HeaderShareButtons() {
  const SHARE_URL = "https://human.opendemic.org";
  const SHARE_QUOTE =
    "See confirmed COVID-19 cases near you on Opendemic. Please #stayhome and stay safe!";

  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleLinkClick() {
    setModalIsOpen(true);
  }

  // function handleLinkClick() {
  //   dispatch(
  //     ModalActions.show(true, <div>hi</div>, {
  //       icon: "share",
  //     })
  //   );
  // }

  return (
    <Fragment>
      {modalIsOpen && <ShareModal close={closeModal} />}
      <ShareContainer>
        {/* facebook */}
        <ShareButton>
          <FacebookShareButton url={SHARE_URL} quote={SHARE_QUOTE}>
            <FacebookIcon size={24} round />
          </FacebookShareButton>
        </ShareButton>
        {/* twitter */}
        <ShareButton>
          <TwitterShareButton url={SHARE_URL} title={SHARE_QUOTE}>
            <TwitterIcon size={24} round />
          </TwitterShareButton>
        </ShareButton>
        {/* whatsapp */}
        <ShareButton>
          <WhatsappShareButton url={SHARE_URL} quote={SHARE_QUOTE}>
            <WhatsappIcon size={24} round />
          </WhatsappShareButton>
        </ShareButton>
      </ShareContainer>
      <ShareButton className="od-cursor-pointer">
        <Icon icon={"link"} iconSize={18} onClick={handleLinkClick} />
      </ShareButton>
    </Fragment>
  );
}

const ShareButton = styled.span`
  margin-left: 10px;
`;

const ShareContainer = styled.span`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
