import React from 'react';

export default function List({ listObj }) {
  return (
    <div>
      <li>
        {listObj.task} <button>DELETE</button>
      </li>
    </div>
  );
}
