import React, {Component} from "react";
import './Counter.css';

import {connect} from 'react-redux';
import {increaseCounter, decreaseCounter, addCounter, subtractCounter, fetchCounter} from "../../store/actions";

class Counter extends Component {

    componentDidMount() {
        this.props.fetchCounter();
    }

    render() {
        return (
            <div className="Counter">
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.increaseCounter}>Increase</button>
                <button onClick={this.props.decreaseCounter}>Decrease</button>
                <button onClick={this.props.addCounter}>Increase by 5</button>
                <button onClick={this.props.subtractCounter}>Decrease by 5</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        hello: 'Hello message',
        counter: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increaseCounter: () => dispatch(increaseCounter()),
        decreaseCounter: () => dispatch(decreaseCounter()),
        addCounter: () => dispatch(addCounter(5)),
        subtractCounter: () => dispatch(subtractCounter(5)),
        fetchCounter: () => dispatch(fetchCounter()),

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);