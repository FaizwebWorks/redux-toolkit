import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/reducers/counterSlice'

const App = () => {
  const { value } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const incrementHandler = () => {
    // console.log(value)
    dispatch(increment(value + 1))
  }

  const decrementHandler = () => {
    dispatch(decrement(value - 1))
  }

  return (
    <div className='mx-auto w-[80%] rounded-2xl my-10 p-10 bg-slate-200'>
      <h1 className='font-extrabold text-2xl mb-4 ml-2'>{value}</h1>
      <button onClick={incrementHandler} className='bg-green-500 text-white px-4 py-2 rounded-xl mr-2'>Increment by 1</button>
      <button onClick={decrementHandler} className='bg-red-500 text-white px-4 py-2 rounded-xl '>Decrement by 1</button>
    </div>
  )
}

export default App