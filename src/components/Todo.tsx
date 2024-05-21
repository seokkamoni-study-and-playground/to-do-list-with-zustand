import { useCancelCompletedTodo } from '@/hooks/useCancelCompletedTodo';
import { useCompleteTodo } from '@/hooks/useCompleteTodo';
import { useDeleteTodo } from '@/hooks/useDeleteTodo';
import { useUpdateTodo } from '@/hooks/useUpdateTodo';
import { type Todo } from '@/types/todo';
import { css, cx } from '@styled-system/css';
import { stack } from '@styled-system/patterns';

type TodoProps = Todo;

export default function Todo({ id, isCompleted, title }: TodoProps) {
  const { deleteTodoMutate } = useDeleteTodo();
  const { updateTodoMutate } = useUpdateTodo();
  const { completeTodoMutate } = useCompleteTodo();
  const { cancelCompletedTodoMutate } = useCancelCompletedTodo();

  const handleCompleteTodoToggle = () => {
    if (isCompleted) {
      cancelCompletedTodoMutate(id);
    } else {
      completeTodoMutate(id);
    }
  };

  const handleDeleteTodo = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteTodoMutate(id);
    }
  };

  const handleUpdateTodo = () => {
    const updateTitle = prompt('수정할 할 일을 입력해 주세요.');
    if (updateTitle) {
      updateTodoMutate(id, updateTitle);
    }
  };

  return (
    <li className={todoStyle}>
      <div className={stack({ direction: 'row', gap: '12px', align: 'center' })}>
        <input type="checkbox" defaultChecked={isCompleted} onClick={handleCompleteTodoToggle} />
        <div className={cx(todoTextStyle, css(isCompleted && { textDecoration: 'line-through' }))}>
          {title}
        </div>
      </div>
      <div className={stack({ direction: 'row', gap: '12px', align: 'center' })}>
        <button className={todoUpdateButton} onClick={handleUpdateTodo}>
          수정
        </button>
        <button className={todoDeleteButton} onClick={handleDeleteTodo}>
          삭제
        </button>
      </div>
    </li>
  );
}

const todoDeleteButton = css({
  fontSize: '14px',
  cursor: 'pointer',
});

const todoUpdateButton = css({
  fontSize: '14px',
  cursor: 'pointer',
});

const todoStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: '0',
  height: '48px',
  borderBottom: '1px solid',
  borderColor: 'gray.100',
  width: '100%',
});

const todoTextStyle = css({
  fontSize: '14px',
});
