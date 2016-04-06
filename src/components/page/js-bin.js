import React, { Component } from 'react';
import { Row, Col } from 'antd';

class JsBinPage extends Component {
    iframe() {
        return {
            __html: '<iframe src="//jsbin.com/tijavem/2/edit?html,css,output" width="100%" height="450"></iframe>'
        };
    }
    render() {
        return (
            <section className="main-container">
                <Row type="flex" justify="center" align="middle">
                    <Col span="20">
                        <h2>Jsbin page</h2>
                        <div dangerouslySetInnerHTML={ this.iframe() } />
                    </Col>
                </Row>
            </section>
        );
    };
};

export default JsBinPage;