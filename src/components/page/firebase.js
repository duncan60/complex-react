import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { FirebaseContainer } from 'components/containers';

class FirebasePage extends Component {
    render() {
        return (
           	<section className="main-container">
	           	<Row type="flex" justify="center" align="middle">
	           	    <Col span="20">
	           	        <h2>Firebase Page</h2>
                        <FirebaseContainer />
	           	    </Col>
	           	</Row>
            </section>
        );
    };
};

export default FirebasePage;