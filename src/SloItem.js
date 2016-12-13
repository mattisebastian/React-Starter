import React from 'react';
//import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

export default class SloItem extends React.Component {

  constructor(props) {
    super(props);

  }

  static get getDefaultProps() {
    return {
        title: 'Untitled',
        description: 'No description here.',
        category: 'Sample Category'
    }
      
  }


  render() {
    return (
        <div className="well">
            <h2>{this.props.nr + 1}. {this.props.title}</h2>
            <p>{this.props.description}</p>
            <p>{this.props.category}</p>
            <span><a className="btn btn-danger" ><i className="icon-trash icon-large"></i> Delete</a></span>
        </div>
      );
  }
}