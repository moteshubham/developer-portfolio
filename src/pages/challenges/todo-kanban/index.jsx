import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ToDoKanban() {
  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, title: 'Design new feature', description: 'Create wireframes and mockups' },
      { id: 2, title: 'Review code', description: 'Code review for pull request #123' }
    ],
    inProgress: [
      { id: 3, title: 'Implement API', description: 'Build REST API endpoints' }
    ],
    done: [
      { id: 4, title: 'Setup project', description: 'Initialize project structure' }
    ]
  });

  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [draggedTask, setDraggedTask] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.title.trim()) {
      const task = {
        id: Date.now(),
        title: newTask.title,
        description: newTask.description
      };
      setTasks(prev => ({
        ...prev,
        todo: [...prev.todo, task]
      }));
      setNewTask({ title: '', description: '' });
    }
  };

  const moveTask = (taskId, fromColumn, toColumn) => {
    if (fromColumn === toColumn) return;

    setTasks(prev => {
      const task = prev[fromColumn].find(t => t.id === taskId);
      if (!task) return prev;

      return {
        ...prev,
        [fromColumn]: prev[fromColumn].filter(t => t.id !== taskId),
        [toColumn]: [...prev[toColumn], task]
      };
    });
  };

  const handleDragStart = (e, task, column) => {
    setDraggedTask({ task, column });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, column) => {
    e.preventDefault();
    if (draggedTask) {
      moveTask(draggedTask.task.id, draggedTask.column, column);
      setDraggedTask(null);
    }
  };

  const columns = [
    { key: 'todo', title: 'To Do', color: 'bg-gray-100' },
    { key: 'inProgress', title: 'In Progress', color: 'bg-yellow-100' },
    { key: 'done', title: 'Done', color: 'bg-green-100' }
  ];

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            to="/challenges"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            ← Back to Challenges
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Todo Kanban Board</h1>
          <p className="text-gray-600">
            A drag-and-drop kanban board for managing tasks with different status columns.
          </p>
        </div>

        {/* Add Task Form */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
          <form onSubmit={addTask} className="flex gap-4">
            <input
              type="text"
              placeholder="Task title"
              value={newTask.title}
              onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Description (optional)"
              value={newTask.description}
              onChange={(e) => setNewTask(prev => ({ ...prev, description: e.target.value }))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Task
            </button>
          </form>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map(column => (
            <div
              key={column.key}
              className={`${column.color} rounded-lg p-4 min-h-96`}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, column.key)}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {column.title} ({tasks[column.key].length})
              </h3>
              <div className="space-y-3">
                {tasks[column.key].map(task => (
                  <div
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task, column.key)}
                    className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 cursor-move hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-medium text-gray-900">{task.title}</h4>
                    {task.description && (
                      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                    )}
                  </div>
                ))}
                {tasks[column.key].length === 0 && (
                  <div className="text-gray-500 text-center py-8">
                    No tasks in this column
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">How to use:</h3>
          <ul className="text-blue-800 space-y-1">
            <li>• Add new tasks using the form above</li>
            <li>• Drag and drop tasks between columns to change their status</li>
            <li>• Tasks automatically move to the appropriate column</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
