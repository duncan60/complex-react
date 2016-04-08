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
        return (
           	<div >
	           	Firebase container
            </div>
        );
    };
};

FirebaseContainer.propTypes = {
    firebeaseInitConnect: PropTypes.func.isRequired,
    firebaseOffConnect  : PropTypes.func.isRequired
};

export default connect(
    state => ({}),
    dispatch => bindActionCreators({
        firebeaseInitConnect,
        firebaseOffConnect
    }, dispatch)
)(FirebaseContainer);