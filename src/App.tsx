import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Work from './pages/Work'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
