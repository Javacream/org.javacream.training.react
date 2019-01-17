import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
render() {
    return (
    <div className='ui unstackable items'>
    I am a basic React component.
    </div>
    );
    }
}
ReactDOM.render(
<Hello />,
document.getElementById('content')
);