import { useState } from 'react';
import { AddTask } from '../../components/AddTask';
import TodoList from '../../components/TodoList';
import { mockTasks } from '../../mocks/tasks';
import { Task } from '../../types/Tasks';

const Home = () => {
  const [tasks, setTasks] = useState(mockTasks);

  const handleChangeTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
  };

  const handleTaskAdd = (title: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    localStorage.setItem('task', newTask.title);
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <AddTask onTaskAdd={handleTaskAdd} />
      <TodoList
        onTaskDelete={handleTaskDelete}
        onTaskComplete={handleChangeTask}
        tasks={tasks}
      />
    </div>
  );
};

export { Home };
