import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router';

class Root extends Component {
    render() {
        return (
            <div>
                <header id="header" className="clearfix">
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
                </header>
                <main className="main-wrapper">
                    {this.props.children}
                </main>
            </div>
        );
    };
};

export default Root;
