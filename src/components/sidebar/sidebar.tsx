import React, { FC, ReactElement } from 'react';
import { CreateTaskForm } from '../CreateTaskForm/CreateTasKForm';
import './slidebar.css';
export const Sidebar: FC = (): ReactElement => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="avatar">M</div>
        <h2>Welcome, Manik</h2>
        <p>This is your personal tasks manager</p>
        <CreateTaskForm/>
      </div>
    </div>
  );
};

