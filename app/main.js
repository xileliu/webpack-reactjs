import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';
import InitialStates from './react_state.jsx';

ReactDOM.render(<InitialStates />, document.getElementById('example'));
ReactDOM.render(<Hello name="lele"/>, document.getElementById('app'));
