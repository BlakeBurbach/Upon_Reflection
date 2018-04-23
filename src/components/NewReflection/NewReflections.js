import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';
import './NewReflections.css';
import Button from 'material-ui/Button';


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
    this.props.dispatch(
        {
            type: 'POST_REFLECTION',
            payload: this.state
        }
    ) // end dispatch action
} // end handlePostReflection


    render(props) {
        return (
            <div className="cardHolder">

                <Card className="inputCard">
                <form id="reflectionInputForm" onSubmit={this.handlePostReflection}>
                    <div className="reflectionContainer">
                        <label htmlFor="topic">
                            <strong> What are you reflecting on? </strong>
                        </label>
                        <br />
                        <textarea name="topic"
                         id="topicArea"
                          placeholder="What Went Well? Better Next Time?"
                          onChange={this.handleChangeFor('topic')}
                          form="reflectionInputForm">
                        </textarea>
                    </div>
                    <br />
                    <div className="reflectionContainer">
                        <label htmlFor="description">
                            <strong> Reflection </strong>
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
                        <Button
                            form="reflectionInputForm"
                            type="submit"
                            variant="raised"
                            color="primary"
                            className="rememberButton">
                            Remember
                            </Button>
                    </div>
                </form>    
                </Card>
            </div>
        )
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});
export default connect(mapReduxStateToProps)(NewReflections);