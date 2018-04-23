import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ReflectionCardItems.css'
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import moment from 'moment'
import { Delete, Bookmark, BookmarkBorder } from 'material-ui-icons'


class ReflectionCardItem extends Component {

    // onClick to dispatch UPDATE in redux to update reflection's bookmarked property
    handleBookmark = (reflection) => {
        console.log('in handleBookmark', reflection)
        this.props.dispatch({
            type: 'UPDATE_REFLECTION',
            payload: reflection
        }) // end dispatch
    } // end handleBookmark

    // onClick to dispatch DELETE in redux to delete reflection from database
    handleDelete = (reflection) => {
        console.log('in handleDelete', reflection)
        this.props.dispatch({
            type: 'DELETE_REFLECTION', 
            payload: reflection
        }) // end dispatch
    } // end handleDelete

    render() {
        let ReflectionItem;
        if (this.props.reflection.bookmarked === true) {
            ReflectionItem = (<Card className="reflectionCard">
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
                        <Button className="delete" size="large" onClick={()=>this.handleDelete(this.props.reflection)}> Delete <Delete /> </Button>
                        <div className="bookmark">
                            <Button size="large" onClick={()=>this.handleBookmark(this.props.reflection)}> Bookmark <Bookmark /> </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>)
        } else {
            ReflectionItem = (<Card className="reflectionCard">
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
                        <Button className="delete" size="large" onClick={()=>this.handleDelete(this.props.reflection)}> Delete <Delete /> </Button>
                        <div className="bookmark">
                            <Button size="large" onClick={()=>this.handleBookmark(this.props.reflection)}> Bookmark <BookmarkBorder /> </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>)
        }
        return ReflectionItem
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(ReflectionCardItem);