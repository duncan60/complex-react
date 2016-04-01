import React, { PropTypes, Component } from 'react';
import { Row, Col } from 'antd';
class Home extends Component {
    render() {
        return (
            <section className="main-container">
                <Row type="flex" justify="center" align="middle">
                    <Col span="20">Home</Col>
                </Row>
            </section>
        );
    };
};

export default Home;