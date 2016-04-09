import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { firebeaseInitConnect, firebaseOffConnect } from 'actions';

class FirebaseContainer extends Component {
    componentDidMount() {
        this.props.firebeaseInitConnect();
    }
    componentWillUnmount() {
        this.props.firebaseOffConnect();
    }
    render() {
        console.log('render list', this.props.list);
        return (
           	<div >
	           	Firebase container
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