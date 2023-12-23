import "./weDo.scss";
import {motion} from 'framer-motion'

const Wedo = () => {
  return (
    <div className="wedo">
      <h1>WHAT WE <span>OFFER</span></h1>
      <p>
        Catalyst is an agile and proactive development services provider
        creating new digital experiences for your end users with intelligent
        solutions. We use intelligent practices, advanced technologies, and
        adaptive systems for your development solutions.
      </p>
      <div className="circlewrapper">
        <div className="image1">
          <motion.img initial={{opacity:0}} animate={{opacity: [1, 0.2, 0.2, 0.2, 0]}} transition={{duration: 3, repeat: Infinity, ease: "linear"}} src="/settings1.png" alt="" />
          <p>IT MANAGEMENT</p>
        </div>
        <div className="image2">
          <motion.img initial={{opacity:0}} animate={{opacity: [0, 1, 0.2, 0.2, 0.2]}} transition={{duration: 3, repeat: Infinity, ease: "linear"}} src="/phone1.png" alt="" />
          <p>APP DEVELOPEMENT</p>
        </div>
        <div className="image3">
          <motion.img initial={{opacity:0}} animate={{opacity: [0.2, 0, 1, 0.2, .2]}} transition={{duration: 3, repeat: Infinity, ease: "linear"}} src="/cyber security 1.png" alt="" />
          <p>CYBER SECURITY</p>

        </div>
        <div className="image4">
          <motion.img initial={{opacity:0}} animate={{opacity: [0.2, 0.2, 0, 1, 0.2]}} transition={{duration: 3, repeat: Infinity, ease: "linear"}} src="/cloud 1.png" alt="" />
          <p>CLOUD COMPUTING</p>
        </div>
        <div className="image5">
          <motion.img initial={{opacity:0}} animate={{opacity: [0.2, 0.2, 0.2, 0, 1]}} transition={{duration: 3, repeat: Infinity, ease: "linear"}} src="/web 2.png" alt="" />
          <p>WEB DEVELOPEMENT</p>

        </div>
      </div>
    </div>
  );
};

export default Wedo;
