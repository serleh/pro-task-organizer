import React from 'react';
import List from './List';

export default function TodoList({ items }) {
  return (
    <div>
      <ul>
        {items.map((list) => (
          <List listObj={list} key={list.id} />
        ))}
      </ul>
    </div>
  );
}
