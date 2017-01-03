import React from 'react';
import { Button, Input, FormGroup } from 'reactstrap';

export default class AddSloItemForm extends React.Component {

  static get propTypes() {
    return {
      onProductAdd: React.PropTypes.func.isRequired
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };

    this._handleTitleChange = this._handleTitleChange.bind(this);
    this._handleDescriptionChange = this._handleDescriptionChange.bind(this);
    this._handleProductAdd = this._handleProductAdd.bind(this);
  }

  _handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  _handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });

  }

  _handleProductAdd() {
    this.props.onProductAdd(this.state);
    this.setState({
      //title: undefined,
      state: undefined,
      category: "Sample Category from Add method"
      // maybe add more here
    })
  }

  render() {
    return (
        <div className="well">
            <h2>Add a SLO</h2>
            <FormGroup>
            <p>Title:</p>
            <Input value={this.state.title} onChange={this._handleTitleChange} />

            <p>Description:</p>
            <Input value={this.state.description} onChange={this._handleDescriptionChange} />
            </FormGroup>
            <Button onClick={this._handleProductAdd}>Add SLO</Button>
        </div>
      );
  }
}