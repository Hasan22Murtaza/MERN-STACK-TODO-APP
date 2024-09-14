import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const { register, reset, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        resolver: yupResolver(validationSchema),
    });


    const onSubmit = async (data) => {
        const URL = process.env.REACT_APP_API_URL
        await axios.post(`${URL}/signup`, data).then((response) => {
            console.log(response)
            toast.success(response.data.message)
            reset()
        }).catch((error) => {
            console.log(error)
            toast.error(error.response.data.message)
        })
    };

    return (
        <div>
            <div class="container">
                <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <div class="pt-4 pb-2">
                                            <h5 class="card-title text-center pb-0 fs-4">Sign Up for a New Account</h5>
                                            <p class="text-center small">Enter your email & password to create an account</p>
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)} class="row g-3 needs-validation">
                                            <div className="col-12">
                                                <label htmlFor="text" className="form-label">User Name</label>
                                                <input
                                                    type="text"
                                                    name="userName"
                                                    className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                                                    {...register('userName')}
                                                    id="userName"
                                                />
                                                <div className="invalid-feedback">{errors.username?.message}</div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <div className="input-group has-validation">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                        {...register('email')}
                                                        id="email"
                                                    />
                                                    <div className="invalid-feedback">{errors.email?.message}</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                    {...register('password')}
                                                    id="password"
                                                />
                                                <div className="invalid-feedback">{errors.password?.message}</div>
                                            </div>
                                            <div className="col-12">
                                                <button
                                                    className={`btn btn-primary w-100  ${(!isDirty || !isValid)}`}
                                                    disabled={!isDirty || !isValid}
                                                    type="submit"
                                                >
                                                    Sign Up
                                                </button>
                                            </div>
                                        </form>
                                        <div class="col-12">
                                            <p class="small mb-0">Forget Password? <Link to="/forget-password" class=""> Forget Password </Link></p>
                                            <p class="small mb-0">Already have an account? <Link to="/" class="">Log in</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Signup
