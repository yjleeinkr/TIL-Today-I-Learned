import styled from "styled-components";
import { MdDone, MdDelete } from 'react-icons/md'

const Remove = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  color : #868e96;
  font-size:24px;
  cursor: pointer;
  display:none;
   &:hover{
    color: #ff6b6b;
  }
`
const TodoItemBlock = styled.div`
  display: flex;
  align-items:center;
  padding:12px;
  &:hover{
    ${Remove}{
      display:initial;
    }
  }
`

const CheckCircle = styled.div`
  width:32px;
  border : 1px solid #868e96;
  height:32px;
  border-radius:16px;
  font-size:24px;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:20px;
  cursor: pointer;
  ${props => props.done && `
    border:1px solid #00C6B7;
    color:#00C6B7;
  `}
`

const Text = styled.div`
  flex:1;
  font-size:21px;
  color:#495057;
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${props => props.done && `
    color: #ced4da;
  `}
`

const TodoItem = ({ id, done, text }) => {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>
        {done && <MdDone />}
      </CheckCircle>
      <Text>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  )
}

export default TodoItem