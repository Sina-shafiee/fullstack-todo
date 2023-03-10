import { FormEventHandler, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTodo, updateTodo } from '../api/todoApi';
import TodoForm from '../components/TodoForm/TodoForm';

const EditTodo = () => {
  const [formData, setFormData] = useState({
    title: '',
    isCompleted: false
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        console.log(id);

        const { title, isCompleted } = await getTodo(id!);

        console.log(title, isCompleted);

        setFormData({ title, isCompleted });
      } catch (error) {
        // todo fix errors
        alert('something went wrong!');
      }
    };

    fetchTodo();
  }, [id]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const data = await updateTodo(id!, formData);

      if (!data.title) {
        throw new Error('something went wrong!');
      }

      navigate('/');
    } catch (error) {
      alert('something went wrong!');
    }
  };

  return (
    <main className='container'>
      <TodoForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </main>
  );
};

export default EditTodo;
