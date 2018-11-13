import React from 'react';
import Review from './Review.js';

  const Reviews = (props) => (
    <div className="reviewsWrapper">
            
      {
        props.reviews.map((review, i)=>{
          return(         
              <Review key={review._id} review={review}/>
          )
        })
      }
    </div>
  );

export default Reviews;
