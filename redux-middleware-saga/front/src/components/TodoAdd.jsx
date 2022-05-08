import styled from "styled-components";
import { useState } from 'react'
import { MdAdd } from 'react-icons/md'

const CircleBtn = styled.button`
  background-color:#00C6B7;
   &:hover{
     background-color:#0edbca;
   }
   &:active{
     background-color:#20c997;
   }

   cursor:pointer;
   width:80px;
   height:80px;
   border-radius:50%;
   position:absolute;
   left:50%;
   bottom:0px;
   transform:translate(-50%,50%);
   color:#fff;
   font-size:60px;
   display:flex;
   align-items:center;
   justify-content:center;
   border:none;
   transition: 0.125s all ease-in;

   ${props => props.open && `
     background:#ff6b6b;
       &:hover{
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%,50%) rotate(45deg);
   `}
`
const InputWrap = styled.div`
  width:100%;
  bottom:0;
  left:0;
  position:absolute;
`
const InputForm = styled.form`
  background-color: #f8f9fa;
  padding:32px 32px 72px 32px;
  border-top: 1px solid #e9ecef;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`
const Input = styled.input`
  width: 100%;
  padding:12px;
  box-sizing:border-box;
  border: 1px solid #dee2e6;
  border-radius:4px;
  outline:none;
  font-size:18px;
`
const TodoAdd = () => {
  const [open, setOpen] = useState(false)
  const onToggle = () => setOpen(!open)

  return (
    <>
      {
        open && (
          <InputWrap>
            <InputForm>
              <Input autoFocus placeholder="입력 후 Enter키를 눌러주세요" />
            </InputForm>
          </InputWrap>
        )
      }
      < CircleBtn onClick={onToggle} open={open} >
        <MdAdd />
      </ CircleBtn>
    </>


  )
}

export default TodoAdd