import './home.scss'
import {motion} from 'framer-motion'

const Home = () => {

  const sliderVariants = {
    initial :{
      x: '-20%',
    },
    animate:{
      x : '-80%',
      opacity:0,

      transition : {
        duration : 5,
        repeat : Infinity,
        repeatType:'mirror',
      }
    }
  }

  return (
    // <div className='home'>
      <div className='wrapper'>
      <div className='image-container'>
        {/* <div className='image'> */}
      <img src="/heroPortrait.png" alt="" />

        {/* </div> */}
      <div className="overlay">
        <motion.div className="star1" initial={{opacity:1}} animate={{opacity:0}} transition={{delay:2, duration:2, repeat:Infinity}}></motion.div>
        <motion.div className="star2" initial={{opacity:1}} animate={{opacity:0}} transition={{delay:5, duration:3, repeat:Infinity}}></motion.div>
        <motion.div className="star3" initial={{opacity:1}} animate={{opacity:0}} transition={{duration:4, repeat:Infinity}}></motion.div>
        <motion.div className="star4" initial={{opacity:1}} animate={{opacity:0}} transition={{delay:2, duration:5, repeat:Infinity}}></motion.div>
        <motion.div className="star5" initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3, repeat:Infinity}}></motion.div>
        <motion.div className="star6" initial={{opacity:1}} animate={{opacity:0}} transition={{delay:3, duration:5, repeat:Infinity}}></motion.div>
        <motion.div className="star7" initial={{opacity:1}} animate={{opacity:0}} transition={{delay:3, duration:4, repeat:Infinity}}></motion.div>
        <motion.div className="star8" initial={{opacity:1}} animate={{opacity:0}} transition={{delay:2, duration:5, repeat:Infinity}}></motion.div>
        <motion.div className="star9" initial={{opacity:1}} animate={{opacity:0}} transition={{duration:2, repeat:Infinity}}></motion.div>
        <motion.div className="star10" initial={{opacity:1}} animate={{opacity:0}} transition={{delay:8,duration:6, repeat:Infinity}}></motion.div>
      </div>
      </div>
      <div className='homeTexts'>
      <h1>Pioneering Tomorrow's <br/> Digital Solutions  Today</h1>
      <h5>UNLEASH THE POWER OF POSSIBILITY</h5>
      <button>GET IN TOUCH</button>
      <motion.div variants={sliderVariants} initial='initial' animate='animate' className='runningText'>CATALYST</motion.div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Home