import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';

const serverUrl = 'http://dev:1337';

global.socket = io.connect(serverUrl)

document.addEventListener('DOMContentLoaded', () => {
  
  ReactDOM.render(<App />, document.querySelector('#app'));
  
});
