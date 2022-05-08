import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListTemplate = styled.div`
  padding: 20px 32px 48px;
  box-sizing:border-box;
  flex:1;
  overflow-y: auto;
`
const TodoList = () => {
  return (
    <TodoListTemplate>
      <TodoItem text="하dsdasdsaasdadadasdadadsasdadaada이하이" done={true} />
      <TodoItem text="하이하이" done={true} />
      <TodoItem text="하이하이" done={false} />
      <TodoItem text="하이하이" done={true} />
    </TodoListTemplate>
  )
}

export default TodoList