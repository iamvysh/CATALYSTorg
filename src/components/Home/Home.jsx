import './home.scss'
import {motion} from 'framer-motion'

const Home = () => {

  const sliderVariants = {
    initial :{
      x:0
    },
    animate:{
      x : '-80%',
      opacity:0,

      transition : {
        duration : 15,
        repeat : Infinity,
        repeatType:'mirror',
      }
    }
  }

  return (
    <div className='home'>
      <div className='wrapper'>
      <div className='image-container'>
      <img src="/heroPortrait.png" alt="" />
      {/* <div className="overlay"> */}
      {/* </div> */}
      </div>
      <div className='homeTexts'>
      <h1>Pioneering Tomorrow's Digital <br/> Solutions  Today</h1>
      <h5>UNLEASH THE POWER OF POSSIBILITY</h5>
      <button>GET IN TOUCH</button>
      <motion.div variants={sliderVariants} initial='initial' animate='animate' className='runningText'>CATALYST</motion.div>
      </div>
      </div>
    </div>
  )
}

export default Home