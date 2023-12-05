import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = () => {
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/verified', {
            method: 'GET',
            headers: { authorization: localStorage.getItem('token') }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.error) {
                    navigate('/signup')
                } else {
                    navigate('/details')
                }
            })
    },[])
    return (
        <div>
            <h1>hello world</h1>
        </div>
    );
};

export default Protected;