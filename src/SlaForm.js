import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

export default class SlaForm extends React.Component {

                    
  constructor() {
    super();
    this.state = {
}
    
  }
  render() {
    return (
      <div>
            <div className="row">
            <div className="six columns">
                <label>First Name</label>
                <input className="u-full-width" placeholder="First Name"
                                                type="text"
                                                onChange={this.handleFirstNameChanged} 
                                                value={this.state.firstName}
                                                autoFocus/>
            </div>
            </div>
            <div className="row">
            <div className="six columns">
                <label>Last Name</label>
                <input className="u-full-width" placeholder="Last Name"
                                                type="text" 
                                                onChange={this.handleLastNameChanged} 
                                                value={this.state.lastName}/>
            </div>
            </div>
        </div>
      
    );
  }
}