import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import SlaForm from './SlaForm';
import LevelInput from './LevelInput';

export default class Example extends React.Component {


  constructor() {
    super();
    this.state = {
        data: {
          customer: {
            name: "defaultName"
          }
        }
      };
  }

  /* Lifecycle Methoden */

  componentDidMount() {
    fetch('http://localhost:9090/api/requestSla', {
      //mode: 'no-cors' // this means the response type will be 'opaque' - whatever that means
    }).then(function(response) {
      // Convert to JSON
      return response.json();
    }).then(function(j) {
      // Yay, `j` is a JavaScript object
      console.log(j);
      this.setState({
        data: j,
        //numberOfLevels: j.offerObjectives["0"].numberOfLevels
      });
    }.bind(this));
  }


  render() {
    //const levelsObject = this.state.data.offerObjectives[0];

    return (
      <div>
        <h1>Request SLA here:</h1>
      <Container>
        <Row>
          <Col xs="6">
              <Form>
              <FormGroup>
                <Label for="exampleEmail">Customer Name</Label>
                <Input type="text" name="name" id="exampleEmail" placeholder="with a placeholder" value={this.state.data.customer.name} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Address</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Basic Price</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              {
                //console.log(levelsObject)
              }              
              </Form>
          </Col>
        </Row>
      </Container>
      </div>


      );
  }
}