import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SubmitForm from './SubmitForm'

const Styles = styled.div`
//   .jumbo {
//     // background: url() no-repeat fixed bottom;
//     background-size: cover;
//     color: #efefef;
//     height: 200px;
//     position: relative;
//     text-align: center;
//     z-index: 0;
//   }
//   .vertical-center {
//     display: flex;
//     align-items: center;
//   }
//   .overlay {
//     background-color: #000;
//     opacity: 0.6;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     z-index: -1;
//   }
//   .icon {
//     color: white;
//     margin: 0 7px;
//   }
//   }
`;

export const Jumbotron = (props) => (
  <Styles>
    <Jumbo fluid className="jumbo vertical-center">
      <div className="overlay"></div>
      <Container>
          <h1>COVID-19 Dashboard</h1>
          <p>As of: {props.date}</p>
          <SubmitForm />
      </Container>
    </Jumbo>
  </Styles>
)