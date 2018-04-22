import React, { Component } from 'react';
import { withTheme } from 'material-ui/styles'
import Card from 'material-ui/Card';
import './NewReflections.css';
import Button from 'material-ui/Button';

class NewReflections extends Component {

    render(props) {
        return (
            <div className="cardHolder">
                <h2>
                    What are you reflecting on?
                </h2>
                <Card className="inputCard">
                    <div className="reflectionContainer">
                        <label htmlFor="topic">
                            <strong> Topic </strong>
                        </label>
                        <br />
                        <textarea name="topic" id="topicArea">
                        </textarea>
                    </div>
                    <br />
                    <div className="reflectionContainer">
                        <label htmlFor="description">
                            <strong> Reflection </strong>
                        </label>
                        <br />
                        <textarea name="description" id="descriptionArea">
                        </textarea>
                    </div>
                    <br />
                    <div className="buttonHolder">
                        <Button variant="raised" color="default" className="rememberButton">Remember</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withTheme()(NewReflections);