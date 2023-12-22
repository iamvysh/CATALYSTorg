import "./Testimonials.scss";
import { useState } from "react";
import { IoIosArrowForward , IoIosArrowBack } from "react-icons/io";
import {motion} from 'framer-motion'


const Testimonials = () => {
  const reviewsData = [
    {
      id: 1,
      reviewer: "CODE WITH RABEEH",
      review: `It has been an absolute pleasure working with catalyst! The service provided was top-notch, and I'm thrilled with the results. they demonstrated exceptional professionalism and delivered beyond my expectations. The experience was smooth, and their expertise truly shines through. Highly recommended for anyone seeking reliable and high-quality service!`,
      company: "BRIDGEON SOLUTIONS",
      image: "/heroPortrait.png",
    },
    {
      id: 2,
      reviewer: "VYSHNAV",
      review: `I had a phenomenal experience working with Catalyst. Their team demonstrated unwavering professionalism and an exceptional commitment to delivering top-notch solutions. From the initial consultation to the final implementation, every step was marked by efficiency and expertise. Catalyst not only met but exceeded our expectations, providing innovative and reliable digital solutions that have greatly contributed to our success. I highly recommend Catalyst to anyone seeking a dedicated partner for high-quality services and impactful results.`,
      company: "DATA SPOT",
      image: "/heroPortrait.png",
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
      <h1>
        FROM OUR <span>CLIENTS</span>
      </h1>

      <div className="corousel">
        <motion.div whileTap={{rotate:'360deg'}}  className="leftArrow" onClick={handlePrevClick}><IoIosArrowBack/></motion.div>
        <div className="corouselWrapper">
        <div className="imageWrapper">
        <div className="overlay"></div>
        <img src={currentReview.image} alt={currentReview.reviewer} />
        </div>
        <div className="reviews">
          <div className="reviewContents">
            <h3>{currentReview.reviewer}</h3>
            <p>({currentReview.company})</p>
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
