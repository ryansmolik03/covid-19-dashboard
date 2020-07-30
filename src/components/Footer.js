import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Styles = styled.div`
    .footer {
        // padding-left: 20px;
        // padding-bottom: 5px;
        // margin-top: 25px;
        // position: relative;
        // bottom: 0;
        // width: 100%;
        // height: 2em;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        padding-left: 20px;
        padding-bottom: 20px;
    }

    .icon {
        color: black;
    }
`;

export const Footer = () => (
    <Styles>
        <footer className="footer">
        <FontAwesomeIcon icon={["far", "coffee"]} />
            <a className="icon" href="https://github.com/ryansmolik03/covid-19-dashboard" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
        </a>
        </footer>
    </Styles>
)