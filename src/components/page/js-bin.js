import React, { Component } from 'react';

class JsBinPage extends Component {
    iframe() {
        return {
            __html: '<iframe src="//jsbin.com/tijavem/2/edit?html,css,output" width="100%" height="450"></iframe>'
        };
    }
    render() {
        return (
            <section className="main-container">
                <div dangerouslySetInnerHTML={ this.iframe() } />
            </section>
        );
    };
};

export default JsBinPage;