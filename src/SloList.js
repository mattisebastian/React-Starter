import React from 'react';
//import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import SloItem from './SloItem';
import AddSloItemForm from './AddSloItemForm';
import EventBus from 'vertx3-eventbus-client'

var eb; 

export default class SloList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aSlos: [
                {
                    title: 'Umbrella Corp SLO',
                    description: 'Short Description'
                },
/*                {
                    title: 'Another Company Ltd.',
                    description: 'Some words about how this is important'
                },
                {
                    title: '3rd Entry SLO.',
                    description: 'Just a small description'
                }*/
            ]

        };
        this._handleProductAdd = this._handleProductAdd.bind(this);
    }

    componentDidMount() {
       eb = new EventBus("http://localhost:9090/eventbus");
       eb.onopen = () => {
        eb.registerHandler("news-feed", (err, msg) => {
            this.setState({
                aSlos: this.state.aSlos.concat({title: msg, description: "yo"})
            });
        });
       }
    }

    _handleProductAdd(newSloItem) {
      this.setState({
        aSlos: this.state.aSlos.concat(newSloItem)
      });
    }


    render() {
        return (
            <div style={{
                padding: '20px'
            }}>
            {/*<AddSloItemForm onProductAdd={this._handleProductAdd} />*/}

            {this.state.aSlos.map((p, i) => <SloItem title={p.title} description={p.description} nr={i} key={i}/>)}
        </div>
            );
    }
}