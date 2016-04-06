import React, { Component } from 'react';
import { Row, Col } from 'antd';
class HomePage extends Component {
    render() {
        return (
            <section className="main-container">
                <Row type="flex" justify="center" align="middle">
                    <Col span="20">
                    	<h2>Home page</h2>
                    </Col>
                </Row>
            </section>
        );
    };
};

export default HomePage;