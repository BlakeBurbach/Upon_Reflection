import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
};

class Header extends Component {


    render(props) {
        return (
            <div className={styles.root}>
                <AppBar position="static" color="primary">
                    <Toolbar color="palette.primary.main">
                        <Typography variant="title" color="inherit">
                            <h1>Upon Reflection...</h1>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br />
            </div>
        )
    }
}

export default withStyles(styles)(Header);