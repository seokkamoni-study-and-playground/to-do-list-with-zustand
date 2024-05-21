import { useTodoListStore } from '@/stores/useTodoListStore';
import { useMemo } from 'react';

export const useGetTodoList = () => {
  const { todoList } = useTodoListStore();
  const filteredTodoList = useMemo(() => {
    const filteredTodoList = todoList.filter(todo => !todo.isCompleted);
    const filteredCompletedTodoList = todoList.filter(todo => todo.isCompleted);
    return [...filteredTodoList, ...filteredCompletedTodoList];
  }, [todoList]);

  return { todoList: filteredTodoList };
};
