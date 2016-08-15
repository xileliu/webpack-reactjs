import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from './react_running.jsx';
import InitialStates from './react_state.jsx';

ReactDOM.render(<InitialStates/>, document.getElementById('example'));

ReactDOM.render(<ParentComponent/>, document.getElementById('running'));
