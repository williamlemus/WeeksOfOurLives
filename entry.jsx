import React from 'react';
import ReactDOM from 'react-dom';
import Main from './lib/main';

document.addEventListener("DOMContentLoaded", ()=>
{
  const main = document.getElementById('main');
  ReactDOM.render(<Main />, main);
})
