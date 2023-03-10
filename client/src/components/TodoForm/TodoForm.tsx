import { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo } from '../../api/todoApi';

export type TodoFormProps = {
  formData: {
    title: string;
    isCompleted: boolean;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      title: string;
      isCompleted: boolean;
    }>
  >;
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

const TodoForm = ({ formData, setFormData, handleSubmit }: TodoFormProps) => {
  const { title, isCompleted } = formData;

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
      <label className='flex flex-col gap-2'>
        Todo title *
        <input
          type='text'
          required
          min={5}
          className='w-full bg-gray-600 p-2 rounded-md'
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
          value={title}
        />
      </label>
      <label className='flex items-center gap-2'>
        <input
          type='checkbox'
          className='w-4 h-4 text-blue-600 bg-gray-600 rounded focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600border-gray-500'
          onChange={() =>
            setFormData((prev) => ({ ...prev, isCompleted: !prev.isCompleted }))
          }
          checked={isCompleted}
        />
        Check if it's already completed
      </label>

      <button
        type='submit'
        className='px-10 py-2 bg-gray-600 shadow-md rounded-md inline-block max-w-max mt-4'
      >
        Save
      </button>
    </form>
  );
};

export default TodoForm;
