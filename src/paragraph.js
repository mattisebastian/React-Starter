import React from 'react';

export default class Paragraphs extends React.Component {

  constructor() {
    super();

  }

  render() {
	var paragraphs = this.props.ps.map((item, index) => {
		return <p key={index}>{item.value}</p>
	});
	return (
    	<div>
    		{ paragraphs }
    	</div>
		)
	}
}