import { Button } from 'antd';
import React, { useState } from 'react';
import ConsumerPage from './Consumer';
import PureConsumer from './PureConsumer';
export const ThemeContext = React.createContext(null);

function ProvideContext() {
  const [theme, setTheme] = useState({ theme: 'dark' });
  return (
    <ThemeContext.Provider value={theme}>
      <Button
        onClick={() =>
          setTheme({ theme: theme.theme === 'dark' ? 'light' : 'dark' })
        }
      >
        点击我改变样式
      </Button>
      <br />
      <br />
      <ConsumerPage></ConsumerPage>
      <PureConsumer></PureConsumer>
    </ThemeContext.Provider>
  );
}

ProvideContext.ThemeContext = ThemeContext;

export default ProvideContext;
