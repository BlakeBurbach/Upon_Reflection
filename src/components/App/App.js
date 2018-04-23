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
import purple from 'material-ui/colors/purple';


// theme from MuiTheme
const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: purple
  },
});

// app class will be the hub component for our entire app
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <div className="App">
        {/* Header Component */}
          <Header theme={theme}/> 
        </div>
        <div>
          {/* Navigation Component */}
        <Navigation theme={theme}/>
        </div>
      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

// bring in redux's global state via props
const mapReduxStateToProps = reduxState => ({
  reduxState
});

// export the app to index js and connect to redux state
export default connect(mapReduxStateToProps)(App);