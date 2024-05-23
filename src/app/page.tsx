import TodoList from '@/components/TodoList';
import TodoListFooter from '@/components/TodoListFooter';
import TodoListHeader from '@/components/TodoListHeader';
import { css } from '@styled-system/css';

export default function MainPage() {
  return (
    <div className={mainPageStyle}>
      <div className={todoListContainerStyle}>
        <TodoListHeader />
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
