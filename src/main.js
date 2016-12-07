import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Form),
    document.getElementById('mount')
  );
});