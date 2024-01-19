import React from 'react';

export default function Info({ tasks }) {
  const numOfTask = tasks.length;
  const numOfCompleted = tasks.filter((task) => task.completed).length;
  const percentage = Math.round((numOfCompleted / numOfTask) * 100);

  if (!tasks.length) return <p className="footer">Start Adding your tasks</p>;
  return (
    <div>
      <footer className="footer">
        <em>
          {percentage === 100
            ? 'Congratulations, You completed your task🕺🏻'
            : ` You have ${numOfTask} tasks on your task-board, and completed
            ${percentage}(%) of the task`}
        </em>
      </footer>
    </div>
  );
}
