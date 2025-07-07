// File: src/App.js

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AccessRoles from './components/AccessRoles/AccessRoles'
function App() {

  return (
    <div className="dashboard">
      <AccessRoles />
    </div>
  );
}

export default App;