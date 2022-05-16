import styled from 'styled-components'

const TodoTemplate = styled.div`
  width : 512px;
  height: 768px;
  background-color: #fff;
  border-radius:16px;
  box-shadow: 0 0 8px rgba(0,0,0,0.08);
  margin: 0 auto;
  margin-top:90px;
  margin-bottom:30px;
  display:flex;
  flex-direction:column;
  position:relative;
`

const TodoLayout = ({ children }) => {
  return (
    <TodoTemplate>
      {children}
    </TodoTemplate>
  )
}

export default TodoLayout