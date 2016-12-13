import React from 'react';
import ReactDOM from 'react-dom';
//import Form from './form';
import SloList from './SloList';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(SloList),
    document.getElementById('mount')
  );
});