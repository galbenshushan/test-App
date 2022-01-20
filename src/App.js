
import React from 'react'
import { useSelector } from 'react-redux';
import AnimatedBg from './UI/AnimatedBg';
import Nav from './components/Nav';
import Main from './components/Main';
import "./components/style.css"

function App() {

  const themeSlice = useSelector(state => state.theme)

  const dynamicText = themeSlice === false ? 'white' : 'black'

  const dynamicBack = themeSlice === false ? '#4e54c8' : '#b8bcf8'

  return (
    <div style={{ backgroundColor: dynamicBack }} className="area" >
      <Nav />
      <Main dynamicText={dynamicText} />
      <AnimatedBg />
    </div >
  )
}


export default App;
