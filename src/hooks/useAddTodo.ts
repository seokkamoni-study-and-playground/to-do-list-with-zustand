import { useTodoListStore } from '@/stores/useTodoListStore';

export const useAddTodo = () => {
  const { todoList, updateTodo } = useTodoListStore();

  const addTodoMutate = (title: string) => {
    const newTodoList = [...todoList, { id: todoList.length + 1, title, isCompleted: false }];
    updateTodo(newTodoList);
  };

  return { addTodoMutate };
};
