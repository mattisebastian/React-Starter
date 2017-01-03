import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';


  const wsUri = "http://localhost:9090/api/socket";
  var websocket;

export default class MainForm extends React.Component {

static get propTypes() {
    return {
      onAddParagraph: React.PropTypes.func.isRequired
    }
  }

  constructor(props) {
  	super(props);
  	this.state = {
      connection: "Offline",
  		value: ""
  	}

  	
  	this._handleAddParagraph = this._handleAddParagraph.bind(this);
  	this._handleTextChange = this._handleTextChange.bind(this);
    this._sendMessage = this._sendMessage.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onError = this.onError.bind(this);
    this._connect = this._connect.bind(this);
  	this._disconnect = this._disconnect.bind(this);
  }

  componentDidMount() {    
  }

  componentWillUnmount() {
    websocket.close();
  }

  onClose(evt) {
    this.setState({
      connection: "Offline"
    })
  console.log("DISCONNECTED");
  }

  onError(evt) {
    this.setState({
      connection: "Error"
    })
    console.log('ERROR:' + evt.data);
  }

  onOpen(evt) {
    this.setState({
      connection: "Connected"
    })
    console.log("CONNECTED");
  }

  _connect() {
    console.log("yo")
    websocket = new SockJS(wsUri);
    websocket.onopen = evt => this.onOpen(evt);
    websocket.onmessage = evt => this.onMessage(evt);
    websocket.onclose = evt => this.onClose(evt);
    websocket.onerror = evt => this.onError(evt);
  }

  _disconnect() {
    websocket.close();
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
              <span>Connection status: {this.state.connection}</span> <i className="fa fa-lightbulb-o" id="lightbulb" aria-hidden="true" style={{color: 'red'}}></i>
              <FormGroup>
                <Label for="examplePassword">Send something to server:</Label>
                <Input type="text" value={this.state.value} onChange={this._handleTextChange} placeholder="Send something" />
              </FormGroup> 
              <FormGroup>
                <Button onClick={this._connect}>Connect</Button>{' '}         
                <Button onClick={this._disconnect}>Disconnect</Button>{' '}           
                <Button onClick={this._sendMessage}>Send</Button> 
              </FormGroup>

            </div>
		)
	}}