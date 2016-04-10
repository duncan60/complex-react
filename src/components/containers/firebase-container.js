import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Table } from 'antd';

import { firebeaseInitConnect, firebaseOffConnect } from 'actions';

class FirebaseContainer extends Component {
    componentDidMount() {
        this.props.firebeaseInitConnect();
        this.columns = [
            {
                title: '編號',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'id'
            }
        ];
    }
    componentWillUnmount() {
        this.props.firebaseOffConnect();
    }
    render() {
        const table = this.props.list.length
            ? <Table columns={this.columns} dataSource={this.props.list} pagination={false} />
            : null;
        return (
           	<div >
	           	{table}
            </div>
        );
    };
};

FirebaseContainer.propTypes = {
    list                : PropTypes.array.isRequired,
    firebeaseInitConnect: PropTypes.func.isRequired,
    firebaseOffConnect  : PropTypes.func.isRequired
};

export default connect(
    state => ({
        list: state.list
    }),
    dispatch => bindActionCreators({
        firebeaseInitConnect,
        firebaseOffConnect
    }, dispatch)
)(FirebaseContainer);