import React from 'react';
import './App.css';
import ThemeProvider from '../lib/models/ThemeProvider';
import {Button} from '../lib/main';

function App() {
  return (
    <ThemeProvider theme={{theme: 'light', setTheme: () => {}}}>
      <Button fullWidth>안녕?</Button>
    </ThemeProvider>
  );
}

export default App;
