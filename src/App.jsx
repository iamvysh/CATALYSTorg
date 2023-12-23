import './App.scss'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Testimonials from './components/Testimonials/Testimonials'
import Wedo from './components/weDo/Wedo'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Wedo/>
      <Testimonials/>
    </>
  )
}

export default App
