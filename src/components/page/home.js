import React, { Component } from 'react';
import { Row, Col } from 'antd';
class HomePage extends Component {
    render() {
        return (
            <section className="main-container">
                <Row type="flex" justify="center" align="middle">
                    <Col span="20">HomePage</Col>
                </Row>
            </section>
        );
    };
};

export default HomePage;