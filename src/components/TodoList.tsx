'use client';

import { css } from '@styled-system/css';
import Todo from './Todo';
import { useGetTodoList } from '@/hooks/useGetTodoList';

export default function TodoList() {
  const { todoList } = useGetTodoList();

  return (
    <ul className={todoListStyle}>
      {todoList.map(todo => (
        <Todo key={todo.id} id={todo.id} isCompleted={todo.isCompleted} title={todo.title} />
      ))}
    </ul>
  );
}

const todoListStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '12px',
  height: '100%',
  padding: '24px 0',
  overflow: 'auto',
});
