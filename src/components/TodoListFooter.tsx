import { css } from '@styled-system/css';

export default function TodoListFooter() {
  return (
    <footer className={todoListFooterStyle}>
      <input className={todoInputStyle} />
      <button className={todoButtonStyle}>추가</button>
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
