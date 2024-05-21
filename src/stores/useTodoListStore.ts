import { Todo } from '@/types/todo';
import { create } from 'zustand';

type TodoListState = {
  todoList: Todo[];
};

type TodoListActions = {
  updateTodo: (todoList: Todo[]) => void;
};

export const useTodoListStore = create<TodoListState & TodoListActions>(set => ({
  todoList: [],
  updateTodo: todoList => set(() => ({ todoList })),
}));
