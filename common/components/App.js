import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '../components/AppBar';
import CounterApp from '../containers/CounterApp';

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar />
      <CounterApp />
    </div>
  </MuiThemeProvider>
);

export default App
