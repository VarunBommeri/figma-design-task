import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>Internal Audit</li>
        <li>UAT Testing</li>
        <li>Queue</li>
        <li>Workflow</li>
        {/* Add more menu items */}
      </ul>
    </aside>
  );
};

export default Sidebar;
