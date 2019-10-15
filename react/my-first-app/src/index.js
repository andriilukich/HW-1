import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './btn';
import * as serviceWorker from './serviceWorker';
/*

function Greed(props) {

    // let 
    // phrase = 'World\'s';

    return(
        // <h1>Hello {phrase} LOH </h1>
        <h1>Hello {props.phrase}! My name is {props.name}.</h1>
    )
}

function GreedAll() {
    return (
        <div>
            <Greed phrase='World' name='Andrii'/>
            <Greed phrase='people' name='Alex'/>
            <Greed phrase='animals' name='Andrii'/>
        </div>
    )
}

*/

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Clock />
                <Button />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
