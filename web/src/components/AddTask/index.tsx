import { useState } from 'react';

interface AddTaskProps {
  onTaskAdd: (title: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onTaskAdd }) => {
  const [title, setTitle] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (title.trim() !== '') {
        onTaskAdd(title.trim());
        setTitle('');
      }
    }
  };

  return (
    <input
      type='text'
      placeholder='Adicionar nova tarefa'
      value={title}
      onChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
      className='w-full px-3 py-2 border rounded-lg outline-none'
    />
  );
};

export { AddTask };
