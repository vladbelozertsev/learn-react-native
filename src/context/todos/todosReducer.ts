import { TodosState } from './todosState';
import { TodosActions } from './todosActions';

export const todosReducer = (state: TodosState, action: TodosActions) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    // case 'DECREASE':
    //   return state - 1;
    // case 'INCREASE_BY':
    //   return state + action.payload;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
