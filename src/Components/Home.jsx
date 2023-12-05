import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div className='text-center mt-24'>
            <h1 className='text-4xl'>Welcome to my task For Sky Goal..!!</h1>
            <Link to='/protect' className='bg-green-500 p-3 rounded-lg mt-6 text-white btn'>View Button</Link>
            <small className='block'>this task is protect by JWT Authorization</small>
        </div>
    );
};

export default Home;