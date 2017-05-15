import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button
                type= { this.props.type }
                name= { this.props.name }
            >Ajouter
            </button>
        );
    }
}

export default Button;