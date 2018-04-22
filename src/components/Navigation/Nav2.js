import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer'
import NewReflections from '../NewReflection/NewReflections';
import ViewReflections from '../ViewReflections/ViewReflections';
import { withStyles } from 'material-ui/styles';


class Navigation extends Component {

    render() {

        return (
            <Drawer
                docked={false}
                open={this.state.open}
                onRequestChange={(open) => this.setState({ open })}>
                <Menu>
                <MenuItem onTouchTap={() => { this.handleClose() }} >
                    <NavLink to="/new_reflections">Add New Reflection</NavLink>
                </MenuItem>
                <MenuItem onTouchTap={() => { this.handleClose() }} >
                    <NavLink to="/view_reflections"> View Refletions </NavLink>
                </MenuItem>
                </Menu>
            </Drawer>
        )
    }
}

export default withStyles(Navigation);
