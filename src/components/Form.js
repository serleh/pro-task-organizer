import React, { useState } from 'react';

export default function Form({ onAddItems }) {
  const [task, setTask] = useState('');

  function addTask(e) {
    e.preventDefault();
    console.log('first');
    if (!task) return;
    setTask('');

    const newTodo = { id: Date.now(), task, completed: false };
    console.log(newTodo);
    onAddItems(newTodo);
  }
  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Enter task.."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>ADD TASK</button>
      </form>
    </div>
  );
}
