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
        <span
          style={
            list.completed
              ? { textDecoration: 'line-through', color: '#ff3300b3' }
              : {}
          }
        >
          {list.task}
        </span>
        <div onClick={() => onDeleteTask(list.id)} className="delete-button">
          X
        </div>
      </li>
    </div>
  );
}
