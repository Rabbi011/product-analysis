import React from 'react';
import { Card } from 'react-bootstrap';
import useReviews from '../../hooks/useReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()

    return (
        <div className='container'>
            <h1 className='my-5'>This is reviews:({reviews.length})</h1>
            {
                reviews.map(review =>
                    <Card className="text-center bg-dark text-white mb-3">
                        <Card.Header className='fs-2'>Name :{review.name}</Card.Header>
                        <Card.Body>
                            <Card.Text>Review : {review.review}</Card.Text>
                            <Card.Text>Rating : {review.star}</Card.Text>
                        </Card.Body>
                        
                    </Card>
                )
            }
        </div>
    );
};

export default Reviews;