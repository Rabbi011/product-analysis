import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 mx-auto'>
                        <h1>This is bord</h1>
                        <h1>this nerhta</h1>
                        <div>
                            <a href="/">Buds</a>
                        </div>

                    </div>
                    <div className='col-6'>

                        <img src="./images/air-buds-1.jpg" className='img-fluid animated' alt="" />
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Home;