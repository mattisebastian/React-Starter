import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainForm from './form';
import LevelInput from './LevelInput';
import Paragraphs from './paragraph';

export default class Example extends React.Component {

  
  constructor() {
    super();
    this.state = {
      messages: [{value: "Some Name"},
                {value: "Other Name"}]
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

      </div>


      )
  }
}