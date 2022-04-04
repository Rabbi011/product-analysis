import React from 'react';
import useReviews from '../../hooks/useReviews';

const Reviews = () => {
    const [review,setReview] = useReviews()
    
    return (
        <div>
            <h1>This is reviews:{review.length}</h1>
        </div>
    );
};

export default Reviews;