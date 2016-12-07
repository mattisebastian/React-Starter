import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

export default class LevelInput extends React.Component {

  constructor() {
    super();
    this.state = {
    }

  }
  render() {
    return (
      <Container>
            <FormGroup>
                <Label for="exampletext">Processing Delay Limit</Label>
                <Input type="text" name="text" id="PDL" placeholder="with a placeholder" />
            </FormGroup>            
            <FormGroup>
                <Label for="exampletext">Intervall</Label>
                <Input type="text" name="PDL" id="Intervall" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="exampletext">Periodic</Label>
                <Input type="text" name="text" id="Periodic" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="exampletext">Accuracy</Label>
                <Input type="text" name="text" id="Accuracy" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="exampletext">Distinct Sensor Limit</Label>
                <Input type="text" name="text" id="exampletext" placeholder="with a placeholder" />
            </FormGroup>
        </Container>


      );
  }
}