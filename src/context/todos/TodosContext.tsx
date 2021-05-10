import React, { createContext, useContext, useReducer } from 'react';
import { TodosState, initialTodosState } from './todosState';
import { TodosActions } from './todosActions';
import { todosReducer } from './todosReducer';

interface Props {
  children: React.ReactNode;
}

export const TodosStateContext = createContext<TodosState>([]); // задаем начальное значение
export const TodosDispatchContext = createContext<React.Dispatch<TodosActions>>(() => {});

export const TodosContext = (props: Props) => {
  const [state, dispatch] = useReducer(todosReducer, initialTodosState);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={state}>{props.children}</TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
};
