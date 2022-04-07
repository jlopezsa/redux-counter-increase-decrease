import React from 'react'
import { useSelector } from 'react-redux';

function Counter() {

  const count = useSelector(state => state.count)
  const interval = useSelector(state => state.setInter)
  return (
    <h1>
      Count is: {count}
      <br />
      Interval is: {interval}
    </h1>
  )
}

export default Counter
