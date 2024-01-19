import { useState } from 'react';
import Form from './Form';
import Header from './Header';
import TodoList from './TodoList';
import Info from './Info';
import '../style.css';

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleClearTask() {
    setTasks([]);
  }

  return (
    <div className="App">
      <Header />
      <Form onAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        onClearTask={handleClearTask}
      />
      <Info tasks={tasks} />
    </div>
  );
}

export default App;
