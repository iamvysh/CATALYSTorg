import './App.scss'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Wedo from './components/weDo/Wedo'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Wedo/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
