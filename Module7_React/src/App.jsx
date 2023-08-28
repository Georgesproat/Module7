import { useState } from 'react'
import './App.css'
import ClockDisplay from './components/Clock'
import ActivityFinder from './components/ActivityFinder'
import RefCounter from './components/RefCounter'
import VideoPlayer from './components/VideoPlayer'
import ReducerCounter from './components/ReducerCounter'
import PostListReducer from './components/PostListReducer'
import BitcoinRates from './components/BitcoinRates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClockDisplay />
      <ActivityFinder />
      <RefCounter/>
      <VideoPlayer/>
      <ReducerCounter/>
      <PostListReducer/>
      <BitcoinRates/>
    </>
  )
}

export default App
