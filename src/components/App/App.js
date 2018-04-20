import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CssBaseline from 'material-ui/CssBaseline';
import 'typeface-roboto';
import { createMuiTheme } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import purple from 'material-ui/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[700],
      main: grey[800],
      dark: grey[900],
      contrastText: '#ffffff',
    },
    secondary: {
      light: purple[300],
      main: purple[400],
      dark: purple[600],
      contrastText: '#000000',
    },
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
          <Navigation />
        </div>
      </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;