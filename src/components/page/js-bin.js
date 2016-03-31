import React, { PropTypes, Component } from 'react';

class JsBin extends Component {
    iframe() {
        return {
            __html: '<iframe src="//jsbin.com/tijavem/2/edit?html,css,output" width="100%" height="450"></iframe>'
        };
    }
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={ this.iframe() } />
            </div>
        );
    };
};

export default JsBin;