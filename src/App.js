// File: src/App.js

import './App.scss';
import HabbitCompletionChecker from './components/HabbitCompletionChecker/HabbitCompletionChecker';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeWrapper from './components/shared/ThemeWrapper';
import ThemeSwitcher from './components/shared/ThemeSwitcher';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper className="App">  
        <ThemeSwitcher position="fixed" />
        {/* <h1 className="title">Mish Playground</h1> */}
        <Cart/>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;