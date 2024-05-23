import { css } from '@styled-system/css';

export default function TodoListHeader() {
  return (
    <header className={todoListHeaderStyle}>
      <span>석두리스트</span>
    </header>
  );
}

const todoListHeaderStyle = css({
  width: '100%',
  height: '24px',
  borderBottom: '1px solid',
  borderColor: 'gray.100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: '16px',
});
