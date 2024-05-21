import { Todo } from '@/types/todoList';
import { create } from 'zustand';

type TodoListState = {
  todoList: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
  cancelCompletedTodo: (id: number) => void;
  updateTodo: (id: number, title: string) => void;
};

export const useTodoListStore = create<TodoListState>(set => ({
  todoList: [],
  addTodo: title =>
    set(state => ({
      todoList: [...state.todoList, { id: state.todoList.length + 1, title, isCompleted: false }],
    })),
  deleteTodo: id => set(state => ({ todoList: state.todoList.filter(todo => id !== todo.id) })),
  completeTodo: id =>
    set(state => {
      const todoList = state.todoList.map(todo =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      );
      return { todoList };
    }),
  cancelCompletedTodo: id =>
    set(state => {
      const todoList = state.todoList.map(todo =>
        todo.id === id ? { ...todo, isCompleted: false } : todo
      );
      return { todoList };
    }),
  updateTodo: (id, title) =>
    set(state => {
      const todoList = state.todoList.map(todo => (todo.id === id ? { ...todo, title } : todo));
      return { todoList };
    }),
}));
