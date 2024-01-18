import React, { useState } from 'react';

import List from './List';

export default function TodoList({ tasks, onDeleteTask, onToggleTask }) {
  const [sortBy, setSortBy] = useState('taskAdded');
  let sortedTasks;

  if (sortBy === 'taskAdded') sortedTasks = tasks;
  if (sortBy === 'completed')
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));
  if (sortBy === 'alphabet')
    sortedTasks = tasks.slice().sort((a, b) => a.task.localeCompare(b.task));
  return (
    <div>
      <ul>
        {sortedTasks.map((list) => (
          <List
            list={list}
            key={list.id}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="taskAdded">Sort by task added</option>
        <option value="completed">Sort by completed</option>
        <option value="alphabet">Sort alphabetically</option>
      </select>
    </div>
  );
}
