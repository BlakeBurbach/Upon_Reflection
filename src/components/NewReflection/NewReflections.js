import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card, { CardContent } from 'material-ui/Card';
import './NewReflections.css';
import Button from 'material-ui/Button';
import swal from 'sweetalert';


class NewReflections extends Component {
    state = {
        topic: '',
        description: ''
    }

    handleChangeFor = (reflectionProperty) => {
        return (event) => {
            this.setState({
                [reflectionProperty]: event.target.value
            })
        }
    }

    handlePostReflection = (event, ) => {
        event.preventDefault();
        if (this.state.topic === '' || this.state.description === '') {
            swal("Don't forget to fill everything in!", "", "info")
        } else {
            swal('Reflection Remembered! View all reflections on other page.', "", "success")
            this.props.dispatch(
                {
                    type: 'POST_REFLECTION',
                    payload: this.state
                }
            )// end dispatch action
        } // end if
    } // end handlePostReflection


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
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});
export default connect(mapReduxStateToProps)(NewReflections);