import React from 'react';
import TaskList from '../components/TaskList';
import Header from '../components/Header';

function TasksPage() {
  return (
    <div className="tasks-page">
      <Header title="Tasks" placeholder="Search tasks..." />
      
      <div>
        <TaskList />
      </div>
    </div>
  );
}

export default TasksPage; 