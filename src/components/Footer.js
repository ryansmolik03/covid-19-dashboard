import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
  footer {
    // padding-left: 20px;
    // padding-bottom: 5px;
    // margin-top: 25px;
    // position: relative;
    // bottom: 0;
    // width: 100%;
    // height: 2em;
    // position: absolute;
    // left: 0;
    // bottom: 0;
    // right: 0;
    // padding-left: 20px;
    // padding-bottom: 20px;
    text-align: right;
    // margin-right: 1em;
    // margin-top: 2em;
  }

  .icon {
    color: black;
  }
`;

export const Footer = () => (
  <Styles>
    <footer>
      <a
        className="icon"
        href="https://github.com/ryansmolik03"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
      </a>
    </footer>
  </Styles>
);
