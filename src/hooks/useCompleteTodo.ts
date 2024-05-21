import { useTodoListStore } from '@/stores/useTodoListStore';

export const useCompleteTodo = () => {
  const { todoList, updateTodo } = useTodoListStore();

  const completeTodoMutate = (id: number) => {
    const newTodoList = todoList.map(todo =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );
    updateTodo(newTodoList);
  };

  return { completeTodoMutate };
};
