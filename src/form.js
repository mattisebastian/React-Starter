import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

export default class Example extends React.Component {

                    
  constructor() {
    super();
    fetch('http://localhost:9090/api/requestSla', {
          //mode: 'no-cors' // this means the response type will be 'opaque' - whatever that means
        }).then(function(response) { 
      // Convert to JSON
      return response.json();
    }).then(function(j) {
      // Yay, `j` is a JavaScript object
      console.log(j); 
      this.state = {
        data: j
    }
    }.bind(this));
    
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
              <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" value={this.state.data.customer.name} />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              
              </FormGroup>
            </Form>

          </Col>
        </Row>
      </Container>
      
    );
  }
}