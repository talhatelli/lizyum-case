import React from 'react';
import TaskCard from './TaskCard';
import { colors } from '../utils/colors';
import { mockTasks } from '../data/mockData';

function TaskList() {
  return (
    <div className="p-3" style={{backgroundColor: "#F4F5F6"}}>
      <div className="mb-4">
        <h2 className="fs-3 fw-bold mb-2">Your Tasks</h2>
        <p className="text-secondary">You have {mockTasks.length} tasks for this period</p>
      </div>
      
      <div className="mb-3">
        <div className="d-flex gap-2 overflow-auto pb-2">
          <button className="btn btn-primary rounded-pill">
            All Tasks
          </button>
          <button className="btn btn-light rounded-pill">
            In Progress
          </button>
          <button className="btn btn-light rounded-pill">
            Completed
          </button>
          <button className="btn btn-light rounded-pill">
            Pending
          </button>
        </div>
      </div>
      
      <div>
        {mockTasks.map(task => (
          <TaskCard 
            key={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            priority={task.priority}
            status={task.status}
            category={task.category}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList; 