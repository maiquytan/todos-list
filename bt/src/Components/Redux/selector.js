import { createSelector } from '@reduxjs/toolkit';


export const filterStatusSelector = (state) => state.filters.status;

export const todosRemainingSelector = createSelector(
  filterStatusSelector,

  (todoList, status) => {
    return todoList.filter((todo) => {
      return (
        (status === 'Completed' ? todo.completed : !todo.completed) 
      );
    });
  }
);