import { useSelector } from "react-redux"

function Child() {
  const count = useSelector(store => store.counter.value)

  return (
    <span>child is {count}</span>
  )
}

export default Child
