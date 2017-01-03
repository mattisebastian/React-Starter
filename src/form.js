import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';


  const wsUri = "ws://echo.websocket.org/";
  const websocket = new WebSocket(wsUri);

export default class MainForm extends React.Component {

static get propTypes() {
    return {
      onAddParagraph: React.PropTypes.func.isRequired
    }
  }



  constructor(props) {
  	super(props);
  	this.state = {
  		value: "aa"
  	}

  	
  	this._handleAddParagraph = this._handleAddParagraph.bind(this);
  	this._handleTextChange = this._handleTextChange.bind(this);
  	this._sendMessage = this._sendMessage.bind(this);
  }

  componentDidMount() {


    websocket.onopen = evt => this.onOpen(evt);
    websocket.onmessage = evt => this.onMessage(evt);
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onerror = function(evt) { onError(evt) };
    

    function onClose(evt) {
    console.log("DISCONNECTED");
    }

    function onError(evt) {
      console.log('ERROR:' + evt.data);
    }
  }
   onOpen(evt) {
      console.log("CONNECTED");
    }

   onMessage(evt) {
   	  console.log("Received: " + evt.data);
      this.setState({value: evt.data});
      this._handleAddParagraph();
      //websocket.close();
    }

  _handleAddParagraph() {
  	this.props.onAddParagraph(this.state);
  	this.setState({});

  }

  _handleTextChange(event) {
        this.setState({
            value: event.target.value
        });
  }

  _sendMessage() {
  	console.log("Sent: " + this.state.value);
  	if(websocket){
    	websocket.send(this.state.value);
  	}
  		
  }


	render() {
		return(
			<div>
              <FormGroup>
                <Label for="examplePassword">Send something to server:</Label>
                <Input type="text" value={this.state.value} onChange={this._handleTextChange} name="password" placeholder="Send something" />
              </FormGroup> 
          	 <button onClick={this._sendMessage}>Add Paragraph</button>           
            </div>
		)
	}}