import React, { Fragment } from "react";
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
import styled from "styled-components";

export default function HeaderShareButtons() {
  const SHARE_URL = "https://human.opendemic.org";
  const SHARE_QUOTE =
    "Opendemic map shows confirmed COVID-19 cases near you. Please stay safe! " +
    SHARE_URL;

  return (
    <Fragment>
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
    </Fragment>
  );
}

const ShareButton = styled.span`
  margin-left: 10px;
`;
