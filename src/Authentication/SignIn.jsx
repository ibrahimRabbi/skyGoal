import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';



const SignIn = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const loginHandler = (data) => {
        setError('')
        fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.status) {
                    alert('login done')
                } if (res.msg) {
                    setError(res.msg)
                }
            })
    }

    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/yN0CJZ3/experimental-3d-morphis-bank-account-management-using-a-cell-phone.png" width={450} />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center text-4xl font-bold mt-5'>Log In</h1>
                        <form onSubmit={handleSubmit(loginHandler)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"  {...register('email', { required: true })} />
                                {errors.email && <p className="text-red-500">email is requird</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" {...register('password', { required: true, minLength: 6 })} />
                                {errors.password?.type === 'required' && <p className="text-red-500">password is requird</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-500">password minimum 6 characters</p>}
                            </div>
                            <p className='text-red-500 font-semibold'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;