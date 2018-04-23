import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card, { CardContent } from 'material-ui/Card';
import './NewReflections.css';
import Button from 'material-ui/Button';
import swal from 'sweetalert';

// component for the new reflections page
class NewReflections extends Component {
    // local state set to empty strings
    // when inputs are changed by user, they will populate 
    // and set our state to those changes and get sent via 
    // a redux dispatch
    state = {
        topic: '',
        description: ''
    } // end state

    // function to handle changes that are made to both topic and description inputs
    // when a user starts typing in either one.
    // It's set so that when a user is in either input, that input will be the target for 
    // the change event.
    handleChangeFor = (reflectionProperty) => {
        return (event) => {
            this.setState({
                [reflectionProperty]: event.target.value
            }) // end setState
        } // end return function
    } // end handleChangeFor

    //onClick function to trigger a dispatch to redux state to POST 
    // new reflection to database
    handlePostReflection = (event, ) => {
        event.preventDefault();
        if (this.state.topic === '' || this.state.description === '') {
            //sweetalert to tell the user to fill input fields before submitting
            swal("Don't forget to fill everything in!", "", "info") 
        } else {
            // sweet alert to tell user their submission was successful
            swal('Reflection Remembered! View all reflections on other page.', "", "success")
            this.props.dispatch(
                {
                    type: 'POST_REFLECTION',
                    payload: this.state
                }
            )// end dispatch action
        } // end if
    } // end handlePostReflection

    // The New Reflection page is a card with two input fields and a button.
    // The input fields are for a topic and description of that topic. The button 
    // is for submitting the two as an object to be sent to the server and then will
    // display on the Views page.
    render(props) {
        return (
            <Card className="inputCard">
                <form id="reflectionInputForm" onSubmit={this.handlePostReflection}>
                    <div className="reflectionContainer">
                        <label>
                            What are you reflecting on?
                            </label>
                        <br />
                        <textarea name="topic"
                            id="topicArea"
                            placeholder="Topic"
                            onChange={this.handleChangeFor('topic')}
                            form="reflectionInputForm">
                        </textarea>
                    </div>
                    <br />
                    <div className="reflectionContainer">
                        <label>
                            Reflection
                            </label>
                        <br />
                        <textarea name="description"
                            id="descriptionArea"
                            placeholder="Description"
                            onChange={this.handleChangeFor('description')}
                            form="reflectionInputForm">
                        </textarea>
                    </div>
                    <br />
                    <div className="buttonHolder" >
                        <div className="refBtn">
                            <Button
                                form="reflectionInputForm"
                                type="submit"
                                className="rememberButton">
                                Remember
                                </Button>
                        </div>
                    </div>
                </form>
            </Card>
        ) // end return
    } // end render
} // end NewReflections Component

// access to redux's global state via props
const mapReduxStateToProps = reduxState => ({
    reduxState
});

// export component and connect to redux
export default connect(mapReduxStateToProps)(NewReflections);