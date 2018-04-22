import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewReflections from '../NewReflection/NewReflections';
import ViewReflections from '../ViewReflections/ViewReflections';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class Navigation extends Component {
    render() {
        return (
            <Router>
                <div className={styles.root}>
                        <nav>
                               <Button><Link to="/new_reflections">Add New Reflection</Link></Button>
                            
                                <Button><Link to="/view_reflections">View Reflections</Link></Button>
                        </nav>

                    <hr />

                    <Route exact path="/new_reflections" component={NewReflections} />
                    <Route path="/view_reflections" component={ViewReflections} />
                </div>
            </Router>
        )
    }
}

export default Navigation;
