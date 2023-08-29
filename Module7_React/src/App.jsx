import { useState } from 'react'
import './App.css'
import ClockDisplay from './components/Clock'
import ActivityFinder from './components/ActivityFinder'
import RefCounter from './components/RefCounter'
import VideoPlayer from './components/VideoPlayer'
import ReducerCounter from './components/ReducerCounter'
import PostListReducer from './components/PostListReducer'
import BitcoinRates from './components/BitcoinRates'
import SubscribeForm from './components/SubscribeForm'
import UserInfoForm from './components/userInfoForm'
import { UserProvider } from './context/UserContext'
import LoginForm from './components/LoginForm'
import MyThemeProvider from './context/MyThemeContext'
import { MoodProvider } from './context/MoodContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MoodProvider>
        <UserProvider>
          <MyThemeProvider>
            <LoginForm />
            <ClockDisplay />
            <ActivityFinder />
            <RefCounter />
            <VideoPlayer />
            <ReducerCounter />
            <PostListReducer />
            <BitcoinRates />
            <SubscribeForm />
            <UserInfoForm />
          </MyThemeProvider>
        </UserProvider>
      </MoodProvider>
    </>
  );
}

export default App
