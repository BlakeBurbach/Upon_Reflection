import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewReflections extends Component {


    componentDidMount() {
        this.props.dispatch(
            {
                type: 'GET_REFLECTIONS'
            }
        )
    }

    render() {
        return (
            <div>
                <h2>
                    View Reflections
                </h2>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ViewReflections);