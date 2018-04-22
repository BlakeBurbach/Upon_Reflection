import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CssBaseline from 'material-ui/CssBaseline';
import 'typeface-roboto';
import { createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import indigo from 'material-ui/colors/indigo';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: indigo,
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <Header theme={theme}/>
        </div>
        <div>
        <Navigation theme={theme}/>
        </div>
      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});

export default connect(mapReduxStateToProps)(App);