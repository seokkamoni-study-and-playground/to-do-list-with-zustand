import { useTodoListStore } from '@/stores/useTodoListStore';

export const useUpdateTodo = () => {
  const { todoList, updateTodo } = useTodoListStore();

  const updateTodoMutate = (id: number, title: string) => {
    const newTodoList = todoList.map(todo => (todo.id === id ? { ...todo, title } : todo));
    updateTodo(newTodoList);
  };

  return { updateTodoMutate };
};
