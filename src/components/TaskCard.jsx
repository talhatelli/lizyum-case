import React from 'react';

function TaskCard({ title, description, dueDate, priority, status, category }) {
  // Priority badge classes
  const priorityBadgeClass = {
    high: 'priority-high',
    medium: 'priority-medium',
    low: 'priority-low',
  };

  // Status badge classes
  const statusBadgeClass = {
    completed: 'status-completed',
    'in-progress': 'status-in-progress',
    pending: 'status-pending',
  };

  return (
    <div className="card task-card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-0">{title}</h5>
          <span className={`badge rounded-pill ${priorityBadgeClass[priority] || 'bg-secondary'}`}>
            {priority}
          </span>
        </div>
        
        <p className="card-text text-secondary small mb-3">{description}</p>
        
        <div className="d-flex justify-content-between align-items-center">
          <div className="small text-muted">
            {dueDate && <span>Due: {dueDate}</span>}
          </div>
          
          <div className="d-flex gap-2">
            {category && (
              <span className="badge bg-light text-dark">
                {category}
              </span>
            )}
            
            {status && (
              <span className={`badge ${statusBadgeClass[status] || 'bg-light text-dark'}`}>
                {status}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard; 