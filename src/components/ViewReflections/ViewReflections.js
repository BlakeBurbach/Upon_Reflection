import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReflectionCardItem from './ReflectionCardItems.js';

class ViewReflections extends Component {

    // page load dispatches a GET request from redux to retrieve all reflections from database
    componentDidMount() {
        this.props.dispatch(
            {
                type: 'GET_REFLECTIONS'
            }
        ) // end dispatch
    } // end componentDidMount

    render() {
        // map over the viewReflections state array to create individual reflection items
        let reflections = this.props.reduxState.viewReflections.map((reflection)=>{
            return(
                <ReflectionCardItem key={reflection.id} reflection={reflection}/>
            ) // end return 
        }) // end map
        return (
            // new divs wrapping around the reflection items
            <div className="viewContainer">
            <div className="cardContainer">
                {reflections}
            </div>
            </div>
        ) // end return 
    } // end render
} // end ViewReflections class

// give this component to redux's global state through props
const mapReduxStateToProps = reduxState => ({
    reduxState
});

// export and connect to redux state
export default connect(mapReduxStateToProps)(ViewReflections);