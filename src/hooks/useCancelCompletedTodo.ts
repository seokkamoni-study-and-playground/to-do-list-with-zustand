import { useTodoListStore } from '@/stores/useTodoListStore';

export const useCancelCompletedTodo = () => {
  const { todoList, updateTodo } = useTodoListStore();

  const cancelCompletedTodoMutate = (id: number) => {
    const newTodoList = todoList.map(todo =>
      todo.id === id ? { ...todo, isCompleted: false } : todo
    );
    updateTodo(newTodoList);
  };

  return { cancelCompletedTodoMutate };
};
