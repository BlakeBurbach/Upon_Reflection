import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NewReflections from '../NewReflection/NewReflections';
import ViewReflections from '../ViewReflections/ViewReflections';
import './Navigation.css';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  });

class Navigation extends Component {
    render() {
        return (
            <Router>
                <div className={styles.root}>
                        <nav>
                            <div className="navBtnHolder">
                                
                                   <NavLink to="/new_reflections" style={{ textDecoration: 'none' }} >
                                   Add New Reflection
                                   </NavLink>
                                
                                <div className="viewRef">
                                
                                    <NavLink to="/view_reflections" style={{ textDecoration: 'none' }}>
                                    View Reflections
                                    </NavLink>
                                
                                </div>
                            </div>
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
