'use client';

import { useAddTodo } from '@/hooks/useAddTodo';
import { css } from '@styled-system/css';
import { ChangeEventHandler, useState } from 'react';

export default function TodoListFooter() {
  const { addTodoMutate } = useAddTodo();
  const [title, setTitle] = useState('');

  const handleTodoTitleChange: ChangeEventHandler<HTMLInputElement> = e => {
    setTitle(e.target.value);
  };

  const handleAddTodo = () => {
    const isNotTitleEmpty = title.trim();

    if (isNotTitleEmpty) {
      addTodoMutate(title);
      setTitle('');
    } else {
      alert('투두를 입력해주세요.');
    }
  };

  return (
    <footer className={todoListFooterStyle}>
      <input className={todoInputStyle} onChange={handleTodoTitleChange} value={title} />
      <button className={todoButtonStyle} onClick={handleAddTodo}>
        추가
      </button>
    </footer>
  );
}

const todoListFooterStyle = css({
  position: 'sticky',
  bottom: '0',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
});

const todoInputStyle = css({
  flex: '1',
  border: '1px solid',
  borderColor: 'gray.100',
  width: '100%',
  height: '48px',
  borderRadius: '8px',
  padding: '0 8px',
  outline: 'none',
});

const todoButtonStyle = css({
  cursor: 'pointer',
  backgroundColor: 'blue.600',
  height: '48px',
  padding: '0 24px',
  borderRadius: '8px',
  color: 'white',
  fontWeight: 'medium',
});
