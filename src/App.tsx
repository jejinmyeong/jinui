import React, {useEffect} from 'react';
import './App.css';
import ThemeProvider from '../lib/models/ThemeProvider';
import {Button} from '../lib/main';
import Typography from '../lib/components/atoms/Typography';
import Tag from '../lib/components/atoms/Tag';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('class', 'light');
  }, []);

  return (
    <ThemeProvider theme={{theme: 'light', setTheme: () => {}}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        <div>
          <Button>button</Button>
          <Button color="primary">button</Button>
          <Button color="error">button</Button>
        </div>
        <div style={{display: 'flex', gap: 10}}>
          <Tag code="javascript">Javascript</Tag>
          <Tag code="typescript">Typescript</Tag>
          <Tag code="react">React</Tag>
          <Tag code="Redux">Redux</Tag>
          <Tag color="defalut" code="Redux">
            Redux
          </Tag>
        </div>
        <div>
          <Typography variant="h1">h1</Typography>
          <Typography variant="h2">h2</Typography>
          <Typography variant="p">p</Typography>
          <Typography variant="span">span</Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
