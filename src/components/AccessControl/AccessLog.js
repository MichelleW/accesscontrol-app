// File: src/components/AccessLog.js
import React from 'react';
import './AccessLog.css';

import { logs } from './data.js';

function AccessLog() {
  return (
    <div className="access-log">
      <h3>Access Log</h3>
      <ul>
        {logs.map(log => (
          <li key={log.id}>
            <strong>{log.user}</strong> - {log.action} at {log.time}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AccessLog;