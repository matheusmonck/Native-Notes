import { TrashSimple } from '@phosphor-icons/react';
import React from 'react';
import { Task } from '../../types/Tasks';
import Checkbox from '../Checkbox';

type Props = {
  tasks: Task[];
  onTaskComplete: (id: number) => void;
  onTaskDelete: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <div className='p-4 px-8'>
      <h1 className='text-3xl font-bold mb-4'>Minha Lista de Tarefas</h1>
      <ul className=''>
        {tasks?.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between py-2 border-y-2 hover:bg-slate-200`}
          >
            <div className='flex items-center gap-4'>
              <Checkbox
                checked={task.completed}
                onChange={() => onTaskComplete(task.id)}
              />
              <span
                className={`text-2xl ${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {task.title}
              </span>
            </div>

            <TrashSimple
              onClick={() => onTaskDelete(task.id)}
              className='text-red-500 cursor-pointer hover:brightness-90 transition-all active:scale-90'
              size={32}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
