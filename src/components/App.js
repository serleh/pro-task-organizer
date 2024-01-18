import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  return (
    <div className="App">
      <Header />
      <Form onAddItems={handleAddItems} />
      <TodoList items={items} />
    </div>
  );
}

export default App;
