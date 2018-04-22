import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ReflectionCardItems.css'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import moment from 'moment'
import {Delete, Bookmark} from 'material-ui-icons'


class ReflectionCardItem extends Component {

    render() {
        return (
                <Card className="reflectionCard">
                    <CardContent className="cardContent">
                            <div className="topic">
                                {this.props.reflection.topic}
                            </div>
                            <br />
                            <div className="date">
                                Remembered on {moment(this.props.reflection.date).format('MMMM Do YYYY')}
                            </div>
                            <br />
                            <div className="description">
                                {this.props.reflection.description}
                            </div>
                            <div className="buttons">
                                <CardActions>
                                    <Button>Delete<Delete/></Button>
                                    <Button>Bookmark<Bookmark/></Button>
                                </CardActions>
                            </div>
                    </CardContent>
                </Card>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ReflectionCardItem);