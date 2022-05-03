import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { add_cmmt } from "../../reducers/comment"
import moment from 'moment'

const CmmtForm = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const inputref = useRef()

  const getInput = (e) => {
    const { value } = e.target
    setInput(value)
  }

  const addCmmt = (e) => {
    e.preventDefault()
    const newCmmt = {
      content: input,
      date: moment().format('YY-MM-DD hh:mm')
    }
    dispatch(add_cmmt(newCmmt))
    setInput('')
    inputref.current.focus()
  }

  return (
    <form onSubmit={addCmmt}>
      <input type="text" onChange={getInput} value={input} ref={inputref} />
      <input type="submit" value='ok' />
    </form>
  )
}

export default CmmtForm