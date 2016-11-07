import React from 'react';
import store from '../store/Store';
import { sampleAction } from '../actions/Actions';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        store.dispatch(sampleAction('test'));
    }
    
    render(){
        return (
            <div className="wrapper">
                <h3>Hello from React</h3>
            </div> 
        )
    }
}