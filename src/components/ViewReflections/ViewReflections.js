import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReflectionCardItem from './ReflectionCardItems.js';

class ViewReflections extends Component {


    componentDidMount() {
        this.props.dispatch(
            {
                type: 'GET_REFLECTIONS'
            }
        )
    }

    render() {
        let reflections = this.props.reduxState.viewReflections.map((reflection)=>{
            return(
                <ReflectionCardItem key={reflection.id} reflection={reflection}/>
            )
        })
        return (
            <div className="viewContainer">
                <h2>
                    View Reflections
                </h2>
            <div className="cardContainer">
                {reflections}
            </div>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ViewReflections);