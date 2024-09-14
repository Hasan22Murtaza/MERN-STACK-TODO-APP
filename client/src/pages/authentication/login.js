import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const { register, reset, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        const URL = process.env.REACT_APP_API_URL
        await axios.post(`${URL}/login`, data).then((response) => {
            console.log(response)
            toast.success(response.data.message)
            const setToken = response?.data?.token
            localStorage.setItem("token", setToken)
            if (response.status === 200) {
                navigate("/dashboard")
            }
            reset()
        }).catch((error) => {
            console.log(error)
            toast.error(error.response.data.message)
        })
    };

    return (
        <div>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                            <p className="text-center small">Enter your email &amp; password to login</p>
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)} className="row g-3 needs-validation">
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
                                            <button
                                                className={`btn btn-primary w-100  ${(!isDirty || !isValid)}`}
                                                disabled={!isDirty || !isValid}
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                        </form>
                                        <div className="col-12">
                                            <p className="small mb-0">Forgot Password? <Link to="/forget-password" className="">Reset Password</Link></p>
                                            <p className="small mb-0">Don't have an account? <Link to="/signup" className="">Create an account</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
