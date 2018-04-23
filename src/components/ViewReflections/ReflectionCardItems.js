import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ReflectionCardItems.css'
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import moment from 'moment'
import { Delete, Bookmark, BookmarkBorder } from 'material-ui-icons'
import swal from 'sweetalert';

// Component for each individual Reflection Card Item 
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
        // sweet alert to warn the user that they are about to delete an item
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((handleDelete) => {
              // if they are sure they want to delete, display success message
            if (handleDelete) {
              swal({
                  title: "Deleted",
                icon: "success",
              });
              console.log('in handleDelete', reflection)
              // if chosen to delete, dispatch action to redux to DELETE reflection item from database
              this.props.dispatch({
                  type: 'DELETE_REFLECTION', 
                  payload: reflection
              }) // end dispatch
            } else {
                // if they cancel the delete, display this message
              swal({title:"Didn't Delete"});
            }
          });
    } // end handleDelete

    render() {
        let ReflectionItem;
        // if the bookmarked property is set to true, display the reflection items with 
        // the bookmark icon to display as marked
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
            // otherwise if false, display with blank bookmark icon to show as unmarked
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
        } // end if
        return ReflectionItem
    } // end render
} // end ReflectionCardItem Component

// access to redux global state via props
const mapReduxStateToProps = reduxState => ({
    reduxState
});

// export component and connect to redux
export default connect(mapReduxStateToProps)(ReflectionCardItem);