import styled from "styled-components";

const TodoHeadTemplate = styled.div`
  height: 213px;
  padding: 48px 32px 24px;
  border-bottom : solid 1px #EBEFF5;
  box-sizing: border-box;

  .day{
    color : #868e96;
    font-size: 21px;
    margin-top: 5px;
  }

  .left-tasks{
    margin-top: 40px;
    font-size: 18px;
    font-weight: bold;
    color: #00C6B7;
  }
`

const TodoHead = () => {
  return (
    <TodoHeadTemplate>
      <h1>2022년 5월 8일</h1>
      <div className="day">일요일</div>
      <div className="left-tasks">할일 n개 남음</div>
    </TodoHeadTemplate>
  )
}

export default TodoHead