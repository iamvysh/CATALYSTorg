import './Navbar.scss'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* this is navbar */}
      <motion.h2 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3,ease:'easeIn'}}>CATAL<span>YS</span>T</motion.h2>
    {/* wrapper */}
      <div className='navigation-wrapper'>
        <h4>HOME</h4>
        <h4>SERVICES</h4>
        <h4>CONTACT US</h4>
        <button>LOGIN</button>
      </div>
    </div>
  )
}

export default Navbar