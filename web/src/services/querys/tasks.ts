import { Task } from '../../types/Tasks';
import { api } from '../api';

const getAllTasks = async (): Promise<Task[]> => {
  const response = await api.get('/tasks');

  return response.data;
};

export { getAllTasks };
