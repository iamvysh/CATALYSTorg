import "./Testimonials.scss";
import { useState } from "react";

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
      review: `It has been an absolute pleasure working with catalyst! The service provided was top-notch, and I'm thrilled with the results. they demonstrated exceptional professionalism and delivered beyond my expectations. The experience was smooth, and their expertise truly shines through. Highly recommended for anyone seeking reliable and high-quality service!`,
      company: "BRIDGEON SOLUTIONS",
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
        <div className="leftArrow" onClick={handlePrevClick}></div>
        <img src={currentReview.image} alt={currentReview.reviewer} />
        <div className="reviews">
          <div className="reviewContents">
            <h3>{currentReview.reviewer}</h3>
            <p>({currentReview.company})</p>
          </div>
           <p>{currentReview.review}</p>
        </div>
        <div className="rightArrow" onClick={handleNextClick}></div>
      </div>
    </div>
  );
};

export default Testimonials;
