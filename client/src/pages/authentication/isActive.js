import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const IsActive = () => {
    const navigate = useNavigate()
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Email is required'),
    });

    const { register, reset, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        const payload = {
            email: data.email,
            isActive: "1"
        }
        const URL = process.env.REACT_APP_API_URL
        await axios.post(`${URL}/activate`, payload).then((response) => {
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
            <div class="container">
                <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <div class="pt-4 pb-2">
                                            <h5 class="card-title text-center pb-0 fs-4">Active account</h5>
                                            <p class="text-center small">Enter your email address and active your account</p>
                                        </div>
                                        <form onSubmit={handleSubmit(onSubmit)} class="row g-3 needs-validation">
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
                                            <button
                                                className={`btn btn-primary w-100  ${(!isDirty || !isValid)}`}
                                                disabled={!isDirty || !isValid}
                                                type="submit"
                                            >
                                                Active
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

export default IsActive
