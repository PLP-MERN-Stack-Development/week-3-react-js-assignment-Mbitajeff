import { useState } from 'react';
import useLocalStorage from '../utils/useLocalStorage';
import Card from '../components/Card';
import Button from '../components/Button';

const FILTERS = {
  all: task => true,
  active: task => !task.completed,
  completed: task => task.completed,
};

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input.trim(), completed: false }]);
      setInput('');
    }
  };

  const toggleTask = id => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(FILTERS[filter]);

  return (
    <Card className="max-w-xl mx-auto mt-8 animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300 transition-colors">Task Manager</h2>
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white dark:border-gray-700 transition-colors"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task..."
          onKeyDown={e => e.key === 'Enter' && addTask()}
        />
        <Button onClick={addTask} className="transition-transform hover:scale-105">Add</Button>
      </div>
      <div className="flex gap-2 mb-4 flex-wrap">
        <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')} className="transition-colors">All</Button>
        <Button variant={filter === 'active' ? 'primary' : 'secondary'} onClick={() => setFilter('active')} className="transition-colors">Active</Button>
        <Button variant={filter === 'completed' ? 'primary' : 'secondary'} onClick={() => setFilter('completed')} className="transition-colors">Completed</Button>
      </div>
      <ul className="space-y-2">
        {filteredTasks.length === 0 && <li className="text-gray-500 dark:text-gray-400">No tasks found.</li>}
        {filteredTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded px-3 py-2 transition-colors animate-fade-in">
            <span
              className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'dark:text-white'}`}
              onClick={() => toggleTask(task.id)}
            >
              {task.text}
            </span>
            <Button variant="danger" className="ml-2 transition-transform hover:scale-105" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default TaskManager; 