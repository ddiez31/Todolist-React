import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <input
                type= { this.props.type }
                name= { this.props.name }
                placeholder= { this.props.placeholder}
            >
            </input>
        );
    }
}

export default Input;