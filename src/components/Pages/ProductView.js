import React, { Component } from 'react';

export default class ProductView extends Component {

    render() {
        return(
            <div>
                <h1>PRODUCT ID {this.props.params.id}</h1>
            </div>
        )
    }

}