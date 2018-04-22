import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class Header extends Component {


    render(props) {
        return (
            <div className={styles.root}>
                <AppBar position="static">
                    <Toolbar color="palette.primary.light">
                        <h1> Upon Reflection... </h1>
                    </Toolbar>
                </AppBar>
                <br />
            </div>
        )
    }
}

export default withStyles(styles)(Header);