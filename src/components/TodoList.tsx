import { css } from '@styled-system/css';
import { stack } from '@styled-system/patterns';

export default function TodoList() {
  return (
    <ul className={todoListStyle}>
      <li className={todoStyle}>
        <div className={stack({ direction: 'row', gap: '12px', align: 'center' })}>
          <input type="checkbox" />
          <div className={todoTextStyle}>안녕 이건 투두리스트야</div>
        </div>
        <div className={stack({ direction: 'row', gap: '12px', align: 'center' })}>
          <button className={todoUpdateButton}>수정</button>
          <button className={todoDeleteButton}>삭제</button>
        </div>
      </li>
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
