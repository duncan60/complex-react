import React, { Component } from 'react';
import { Row, Col } from 'antd';
import marked from 'marked';
import highlight from 'highlight.js';

import 'highlight.js/styles/default.css';

var Markdown = require('react-remarkable');

class MarkdownPage extends Component {
    markedParser(markedStr) {
        marked.setOptions({
            highlight: function (code) {
                return highlight.highlightAuto(code).value;
            }
        });
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
                        <div dangerouslySetInnerHTML={ this.markedParser('# Marked \n I am using __marked__.\n\n ```js\nvar function(){\n  console.log("hello");\n} \n```') } />
                    </Col>
                </Row>
            </section>
        );
    };
};

export default MarkdownPage;