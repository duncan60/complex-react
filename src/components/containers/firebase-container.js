import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { firebeaseInitConnect } from 'actions';

class FirebaseContainer extends Component {
    componentDidMount() {
        this.props.firebeaseInitConnect();
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
    firebeaseInitConnect: PropTypes.func.isRequired
};

export default connect(
    state => ({}),
    dispatch => bindActionCreators({
        firebeaseInitConnect
    }, dispatch)
)(FirebaseContainer);