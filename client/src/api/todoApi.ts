import axios from 'axios';
import { Todo, TodoFormData } from '../types/Todo';

const todoApi = axios.create({
  // baseURL: 'http://localhost:5000/'
  baseURL: 'https://fullstack-todo-backend.vercel.app/'
});

export const getTodos = async (): Promise<Todo[]> => {
  const { data } = await todoApi.get('/todos');

  return data;
};

export const createTodo = async (formData: TodoFormData): Promise<Todo> => {
  const { data } = await todoApi.post('/todos', formData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return data;
};

export const deleteTodo = async (id: string): Promise<Todo> => {
  const { data } = await todoApi.delete(`/todos/${id}`);

  return data;
};

export const getTodo = async (id: string): Promise<Todo> => {
  const { data } = await todoApi.get(`/todos/${id}`);

  return data;
};

export const updateTodo = async (
  id: string,
  formData: TodoFormData
): Promise<Todo> => {
  const { data } = await todoApi.put(`/todos/${id}`, formData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return data;
};
