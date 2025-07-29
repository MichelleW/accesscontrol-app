// File: src/App.js

import './App.scss';
import HabbitCompletionChecker from './components/HabbitCompletionChecker/HabbitCompletionChecker';

const users = [{
  name: "Jasmine Lee",
  role: "Employee",
  avatar: "https://i.pravatar.cc/150?img=37"
}, {
  name: "John Lee",
  role: "Admin",
  avatar: "https://i.pravatar.cc/150?img=35"
}, {
  name: "Michelle Lee",
  role: "Visitor",
  avatar: "https://i.pravatar.cc/150?img=32"
}]


function App() {


  return (
    <div className="App">
      <HabbitCompletionChecker />
    </div>
  );
}

export default App;