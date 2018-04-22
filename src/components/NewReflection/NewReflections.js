import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import Card from 'material-ui/Card';
import './NewReflections.css';
import Button from 'material-ui/Button';

const styles = {
    customWidth: {
        width: 150,
    },
};

class NewReflections extends Component {
    state = {
        value: 1,
    };

    handleChange = (event, index, value) => this.setState({ value });

    render(props) {
        return (
            <div className="cardHolder">
                <h2>
                    Add New Reflections
                </h2>
                <Card className="inputCard">
                <div className="reflectionContainer">
                    <label for="topic">
                          <strong> Topic </strong>
                    </label>
                    <br/>
                    <textarea name="topic" id="topicArea">
                    </textarea>
                </div>
                    <br />
                <div className="reflectionContainer">
                    <label for="description">
                          <strong> Reflection </strong>
                    </label>
                        <br />
                    <textarea name="description" id="descriptionArea">
                    </textarea>
                </div>
                    <br />
                    <div className="buttonHolder">
                        <Button className="rememberButton">Remember</Button>
                    </div>
                </Card>
            </div>
        )
    }
}

export default NewReflections;