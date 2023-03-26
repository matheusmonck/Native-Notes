import React from 'react';

type Props = {
  checked: boolean;
  onChange: () => void;
};

const Checkbox: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <input
      type='checkbox'
      checked={checked}
      onChange={onChange}
      className='rounded w-8 h-8 border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
    />
  );
};

export default Checkbox;
