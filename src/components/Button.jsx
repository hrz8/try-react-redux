import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/sub/counter'

function Button() {
  const count = useSelector(store => store.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(decrement())}>
        count is {count}
      </button>
      <button onClick={() => dispatch(increment())}>
        count is {count}
      </button>
    </>
  )
}

export default Button
