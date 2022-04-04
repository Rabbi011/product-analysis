import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import './Home.css';


const Home = () => {
    const [reviews] = useReviews()
    return (
        <section>
            <div className='container-fluid d-flex align-item-center'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h1>Your Air Buds</h1>
                                <h1 className='home-text-design'>Your Best Air Buds</h1>
                                <p>Turn on the Spoken notifications function by going to Settings, selecting your earbuds under Devices, and then turning on the Spoken notifications option. On the same screen, you can choose which apps have their notifications read aloud. Open Settings on Android and then select Connected devices.</p>
                                <div className='mt-3'>
                                    <NavLink to='/about' className='btn-get-started'>
                                        Line on
                                    </NavLink>

                                </div>

                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 '>
                                <img src="./images/air-buds-1.jpg" className='img-fluid' alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className='container'>
                    <h1 className='my-5'>This is reviews:({reviews.length - 3})</h1>
                    {

                        reviews.slice(0, 3).map(review =>

                            <Card className="text-center bg-dark text-white mb-3">
                                <Card.Header className='fs-2'>Name : {review.name}</Card.Header>
                                <Card.Body>
                                    <Card.Text>Review : {review.review}</Card.Text>
                                    <Card.Text>Star : {review.star}</Card.Text>
                                </Card.Body>

                            </Card>
                            
                        )
                    }
                </div>
                
                <NavLink to='/reviews' className='btn-get-started'>
                    See All Reviews
                </NavLink>
            </div>
        </section>

    );
};

export default Home;