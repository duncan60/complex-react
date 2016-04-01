import React, { Component } from 'react';
import { Row, Col } from 'antd';
import marked from 'marked';
var Markdown = require('react-remarkable');

class MarkdownPage extends Component {
    markedParser(markedStr) {
        return {
            __html: marked(markedStr)
        };
    }
    render() {
        return (
            <section className="main-container">
                <Row type="flex" justify="center" align="middle">
                    <Col span="20">
                        <Markdown>
                            # Markdown
                        </Markdown>
                        <Markdown source="**Markdown is awesome!**" />
                        <div dangerouslySetInnerHTML={ this.markedParser('# marked \n I am using __markdown__.\n\n ```test```') } />
                    </Col>
                </Row>
            </section>
        );
    };
};

export default MarkdownPage;