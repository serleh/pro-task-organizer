import React, { useState } from 'react';

export default function Form({ onAddTask }) {
  const [task, setTask] = useState('');

  function addTask(e) {
    e.preventDefault();
    if (!task) return;
    setTask('');
    const newTodo = { id: Date.now(), task, completed: false };
    console.log(newTodo);
    onAddTask(newTodo);
  }
  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="please enter your task.."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}
