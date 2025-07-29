// File: src/App.js

import './App.scss';
import HabbitCompletionChecker from './components/HabbitCompletionChecker/HabbitCompletionChecker';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeWrapper from './components/shared/ThemeWrapper';
import ThemeSwitcher from './components/shared/ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper className="App">
        <ThemeSwitcher position="fixed" />
        <HabbitCompletionChecker />
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;