import { Todo } from './todosState';

export interface AddTodo {
  type: 'ADD_TODO';
  payload: Todo;
}

export type TodosActions = AddTodo;
