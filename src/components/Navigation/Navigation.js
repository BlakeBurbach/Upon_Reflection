import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewReflections from '../NewReflection/NewReflections';
import ViewReflections from '../ViewReflections/ViewReflections';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/new_reflections">Add New Reflection</Link>
                            </li>
                            <li>
                                <Link to="/view_reflections">View Reflections</Link>
                            </li>
                        </ul>
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
