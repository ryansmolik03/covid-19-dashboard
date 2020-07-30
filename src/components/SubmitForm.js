// import React from 'react'
// import {
//     Form,
//     Button,
//     Container,
//     Row,
//     Col,
//     Jumbotron,
//     Card,
//   } from "react-bootstrap";

// class SubmitForm extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             showModal: false
//         };
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         let usState = event.target.elements.usState.value.toLowerCase();
    
//         let url = US_STATE_URL + usState + "/current.json";
//         fetch(url)
//           .then((response) => response.json())
//           .then((result) => {
//             this.setState({
//               usState: result.state,
//               usStateTotal: result.positive,
//               usStateTotalDeaths: result.death,
//               usStateNew: result.positiveIncrease,
//             });
//           });
//       };

//     render() {
//         return (
//             <Form onSubmit={this.handleSubmit} inline>
//               <Form.Group controlId="usState">
//                 <Form.Row>
//                   <Form.Label>State</Form.Label>
//                   <Col>
//                     <Form.Control required as="select">
//                       <option>AL</option>
//                       <option>AK</option>
//                       <option>AZ</option>
//                       <option>AR</option>
//                       <option>CA</option>
//                       <option>CO</option>
//                       <option>CT</option>
//                       <option>DE</option>
//                       <option>DC</option>
//                       <option>FL</option>
//                       <option>GA</option>
//                       <option>HI</option>
//                       <option>ID</option>
//                       <option>IL</option>
//                       <option>IN</option>
//                       <option>IA</option>
//                       <option>KS</option>
//                       <option>KY</option>
//                       <option>LA</option>
//                       <option>ME</option>
//                       <option>MD</option>
//                       <option>MA</option>
//                       <option>MI</option>
//                       <option>MN</option>
//                       <option>MS</option>
//                       <option>MO</option>
//                       <option>MT</option>
//                       <option>NE</option>
//                       <option>NV</option>
//                       <option>NH</option>
//                       <option>NJ</option>
//                       <option>NM</option>
//                       <option>NY</option>
//                       <option>NC</option>
//                       <option>ND</option>
//                       <option>OH</option>
//                       <option>OK</option>
//                       <option>OR</option>
//                       <option>PA</option>
//                       <option>RI</option>
//                       <option>SC</option>
//                       <option>SD</option>
//                       <option>TN</option>
//                       <option>TX</option>
//                       <option>UT</option>
//                       <option>VT</option>
//                       <option>VA</option>
//                       <option>WA</option>
//                       <option>WV</option>
//                       <option>WI</option>
//                       <option>WY</option>
//                     </Form.Control>
//                   </Col>
//                 </Form.Row>
//               </Form.Group>
//               <Form.Group>
//                 <Col>
//                   <Button type="dark" variant="warning">
//                     Submit
//                   </Button>
//                 </Col>
//               </Form.Group>
//             </Form>
//         )
//     }
// }

// export default SubmitForm;