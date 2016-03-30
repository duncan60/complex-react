import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router';

class Root extends Component {
    render() {
        return (
            <div>
                <Menu mode="horizontal">
                    <Menu.Item>
                        <Link to="/jsbin">JsBin</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/markdown">Markdown</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/firebase">Firebase</Link>
                    </Menu.Item>
                </Menu>
                {this.props.children}
            </div>
        );
    };
};

export default Root;
