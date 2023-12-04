import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loader,setLoader] = useState(false)
const [error,setError] = useState('')

    const submitHandler = (data) => {
        setLoader(true)
        fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    setLoader(false)
                    alert('sign up successfull')
                } else {
                    setLoader(false)
                    setError(res.msg)
                }
        })
    }

    if (loader) {
        return <h1 className='text-2xl text-center font-semibold'>Loading.....</h1>
    }

    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/yN0CJZ3/experimental-3d-morphis-bank-account-management-using-a-cell-phone.png" width={450} />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className='text-center text-4xl font-bold mt-5'>Sign Up</h1>


                        <form onSubmit={handleSubmit(submitHandler)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="user name" className="input input-bordered"  {...register('name', { required: true })} />
                                {errors.name && <p className="text-red-500">name is requird</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    {...register('email', { required: true })} />
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

                            <h1 className='text-red-500 font-semibold'>{error}</h1>
                            <div className="form-control mt-6">
                                <input type='submit' value='Sign Up' className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;