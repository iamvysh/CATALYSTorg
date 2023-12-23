import "./Testimonials.scss";
import { useState } from "react";
import { IoIosArrowForward , IoIosArrowBack } from "react-icons/io";
import {motion} from 'framer-motion'


const Testimonials = () => {
  const reviewsData = [
    {
      id: 1,
      reviewer: "CODE WITH RABEEH",
      review: `It has been an absolute pleasure working with catalyst! The service provided was top-notch, and I'm thrilled with the results. they demonstrated exceptional professionalism and delivered beyond my expectations. The experience was smooth, and their expertise truly shines through. Highly recommended for anyone seeking reliable and high-quality service!, and they updated about project in day to day basis, frequently asking me that if i need any sort of update if they neeed to change anything ,`,
      company: "BRIDGEON SOLUTIONS",
      image: "/reviewer1.jpeg",
    },
    {
      id: 2,
      reviewer: "VYSHNAV",
      review: `I had a phenomenal experience working with Catalyst. Their team demonstrated unwavering professionalism and an exceptional commitment to delivering top-notch solutions. From the initial consultation to the final implementation, every step was marked by efficiency and expertise. Catalyst not only met but exceeded our expectations, providing innovative and reliable digital solutions that have greatly contributed to our success.I highly recommend Catalyst to anyone .`,
      company: "DATA SPOT",
      image: "/reviewer2.jpeg",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrevClick = () => {
    setCurrentReviewIndex(
      (prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length
    );
  };

  const currentReview = reviewsData[currentReviewIndex];

  return (
    <div className="testimonials">
      <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{ ease:"easeIn", repeat:Infinity, duration:3}}>
        FROM OUR <span>CLIENTS</span>
      </motion.h1>

      <div className="corousel">
        <motion.div whileTap={{rotate:'360deg'}}  className="leftArrow" onClick={handlePrevClick}><IoIosArrowBack/></motion.div>
        <div className="corouselWrapper">
        <div className="imageWrapper">
        <motion.div className="overlay" initial={{x:'-200%'}} whileInView={{x:0}} transition={{ damping:300}}></motion.div>
        <img src={currentReview.image} alt={currentReview.reviewer} />
        </div>
        <div className="reviews">
          <div className="reviewContents">
            <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2, ease:"circIn"}}>{currentReview.reviewer}</motion.h3>
            <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:6}}>({currentReview.company})</motion.p>
          </div>
           <p>{currentReview.review}</p>
        </div>
        </div>
        <motion.div whileTap={{rotate:'360deg'}} className="rightArrow" onClick={handleNextClick}><IoIosArrowForward/></motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
