import { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo } from '../api/todoApi';
import TodoForm from '../components/TodoForm/TodoForm';

const CreateTodo = () => {
  const [formData, setFormData] = useState({
    title: '',
    isCompleted: false
  });
  const { title, isCompleted } = formData;

  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const data = await createTodo({ title, isCompleted });

      if (!data.title) {
        throw new Error('something went wrong!');
      }

      navigate('/');
      setFormData({
        title: '',
        isCompleted: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className='container'>
      <TodoForm
        formData={formData}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
      />
    </main>
  );
};

export default CreateTodo;
