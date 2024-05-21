import { useTodoListStore } from '@/stores/useTodoListStore';

export const useDeleteTodo = () => {
  const { todoList, updateTodo } = useTodoListStore();

  const deleteTodoMutate = (id: number) => {
    const newTodoList = todoList.filter(todo => id !== todo.id);
    updateTodo(newTodoList);
  };

  return { deleteTodoMutate };
};
