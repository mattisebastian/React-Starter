import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainForm from './mainform';
import LevelInput from './LevelInput';
import Paragraphs from './paragraph';
import SloList from './SloList'

export default class Example extends Component {

  
  constructor() {
    super();
    this.state = {
      messages: [
      {value: "Name"},
      ]
    };
    
    this._onAddParagraph = this._onAddParagraph.bind(this);
  }

  _onAddParagraph(item) {
    console.log(item);
    this.setState({messages: [...this.state.messages, item]});
    
  }


  render() {
    //const levelsObject = this.state.data.offerObjectives[0];

    return (
      <div>
        <h1>Request SLA here:</h1>
      <Container>
        <Row>
          <Col xs="6">
            <MainForm onAddParagraph={this._onAddParagraph} />
          </Col>
          <Col>
              <Paragraphs ps={this.state.messages} />
          </Col>
        </Row>
      </Container>
      <hr />
      <h2> News: </h2>
      <div>
        <SloList />
      </div>
      </div>


      )
  }
}