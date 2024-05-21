import TodoList from '@/components/TodoList';
import TodoListFooter from '@/components/TodoListFooter';
import { css } from '@styled-system/css';
import { stack } from '@styled-system/patterns';

export default function MainPage() {
  return (
    <div className={mainPageStyle}>
      <div className={todoListContainerStyle}>
        <header className={todoListHeaderStyle}>
          <span>석두리스트</span>
        </header>
        <TodoList />
        <TodoListFooter />
      </div>
    </div>
  );
}

const mainPageStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'white',
});

const todoListContainerStyle = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  height: '100%',
  border: '1px solid',
  borderColor: 'gray.100',
  padding: '24px 32px',
});

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
