import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { update_cmmt, delete_cmmt } from "../../reducers/comment"
import moment from 'moment'

const CmmtList = () => {
  const [cmmt, setCmmt] = useState('')
  const [update, setUpdate] = useState(null)

  const cmmtState = useSelector((state) => state.comment)
  const { list } = cmmtState
  const dispatch = useDispatch()

  const clickCmmt = (k) => {
    console.log(k)
    setUpdate(k)
  }

  const changeInput = (e) => {
    const { value } = e.target;
    setCmmt(value)
  }

  const updateCmmt = (k) => (e) => {
    if (e.key !== 'Enter') return;
    list[k].content = cmmt
    list[k].date = moment().format('YY-MM-DD hh:mm')
    dispatch(update_cmmt(cmmtState))
    setUpdate(null)
  }

  const deleteCmmt = (k) => {
    console.log(k)
    const newList = list.filter((v, i) => i !== k)
    dispatch(delete_cmmt(newList))
  }

  const getList = () => list.map((v, k) => {
    return (
      <ul key={k}>
        <li>
          {
            update === k ?
              <input type="text" defaultValue={v.content} onChange={changeInput} onKeyDown={updateCmmt(k)} autoFocus /> :
              <>
                <span onClick={() => { clickCmmt(k) }}>{v.content}</span>
                <span onClick={() => { deleteCmmt(k) }}>X</span>
              </>
          }
        </li>
        <li>{v.date}</li>
      </ul>
    )
  })

  return (
    <div>
      {getList()}
    </div>
  )
}

export default CmmtList