'use client';

import { useTodoListStore } from '@/stores/useTodoListStore';
import { css } from '@styled-system/css';
import Todo from './Todo';
import { useMemo } from 'react';

export default function TodoList() {
  const todoList = useTodoListStore(state => state.todoList);
  const filteredTodoList = useMemo(() => {
    const filteredTodoList = todoList.filter(todo => !todo.isCompleted);
    const filteredCompletedTodoList = todoList.filter(todo => todo.isCompleted);
    return [...filteredTodoList, ...filteredCompletedTodoList];
  }, [todoList]);

  return (
    <ul className={todoListStyle}>
      {filteredTodoList.map(todo => (
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
