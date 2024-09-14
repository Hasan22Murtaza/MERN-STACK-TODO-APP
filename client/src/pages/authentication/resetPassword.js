import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

const ResetPassword = () => {
    const navigate = useNavigate()
    const { id, token } = useParams()
    const validationSchema = Yup.object().shape({
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const { register, reset, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        const URL = process.env.REACT_APP_API_URL
        await axios.post(`${URL}/reset-password/${id}/${token}`, data).then((response) => {
            console.log(response)
            toast.success(response.data.message)
            if (response.status === 200) {
                navigate('/')
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
                                            <h5 className="card-title text-center pb-0 fs-4">Reset Your Password?</h5>
                                            <p className="text-center small">Enter your email address and we'll send you a link to reset your password.</p>
                                        </div>
                                        <form onClick={handleSubmit(onSubmit)} className="row g-3 needs-validation">
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
                                                Reset password
                                            </button>
                                        </form>

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

export default ResetPassword
