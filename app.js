import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return <div>React Loaded OK!</div>;
    }
}

ReactDOM.render(<App />, document.getElementById('react'));
