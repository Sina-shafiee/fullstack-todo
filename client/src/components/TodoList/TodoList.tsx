import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteTodo, getTodos } from '../../api/todoApi';
import { Todo } from '../../types/Todo';
import { formatDate } from '../../utils/formatData';
import { pause } from '../../utils/pause';

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      setTodoList(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);

    fetchTodos();
  }, []);

  return (
    <div className='container my-10 relative overflow-x-auto sm:rounded-lg'>
      {loading ? (
        <div className='flex items-center justify-center w-full min-h-[60vh]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-16 h-16 animate-bounce'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
            />
          </svg>
        </div>
      ) : (
        <table className='w-full text-sm text-left  text-gray-400'>
          <thead className='text-xs  uppercase bg-gray-700 text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Title
              </th>
              <th scope='col' className='px-6 py-3'>
                Completed
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>

              <th scope='col' className='px-6 py-3'>
                <span className='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {todoList?.map((todo) => {
              const { title, isCompleted, _id: id, createdAt } = todo;
              return (
                <tr
                  key={id}
                  className='border-b bg-gray-800 border-gray-700 hover:bg-gray-600'
                >
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium whitespace-nowrap text-white'
                  >
                    {title}
                  </th>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {isCompleted ? 'done!' : 'Not Yet!'}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {formatDate(createdAt)}
                  </td>
                  <td className='px-6 py-4 flex items-center justify-between text-right'>
                    <Link
                      to={`${id}/edit`}
                      className='font-medium text-blue-500 hover:underline'
                    >
                      Edit
                    </Link>
                    <button
                      onClick={async () => {
                        await deleteTodo(id);
                        await pause(1000);
                        getTodos();
                      }}
                      className='font-medium text-blue-500 hover:underline'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TodoList;
