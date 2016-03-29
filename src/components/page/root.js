import React, { Component } from 'react';

class Root extends Component {
    render() {
        return (
            <div>
                rootPage
                {this.props.children}
            </div>
        );
    };
};

export default Root;
