import React from 'react';

export default function List({ list, onDeleteTask, onToggleTask }) {
  return (
    <div>
      <li>
        <input
          type="checkbox"
          value={list.completed}
          onChange={() => onToggleTask(list.id)}
        />
        <span style={list.completed ? { textDecoration: 'line-through' } : {}}>
          {list.task}
        </span>
        <button onClick={() => onDeleteTask(list.id)}>DELETE</button>
      </li>
    </div>
  );
}
