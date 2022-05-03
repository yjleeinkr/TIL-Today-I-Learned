import Responsive from "../../components/common/responsive"
import { useSelector, useDispatch } from "react-redux"
import { num_up, num_down } from '../../reducers/counter'

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increase = () => {
    dispatch(num_up())
  }

  const decrease = () => {
    dispatch(num_down())
  }

  return (
    <Responsive>
      <h3>Counter:{counter.number} </h3>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </Responsive>
  )
}

export default Counter