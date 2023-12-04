import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='text-4xl'>Welcome to my task For Sky Goal..!!</h1>
            <Link to='/details' className='bg-green-500 p-3 rounded-lg text-white btn'>View Button</Link>
        </div>
    );
};

export default Home;