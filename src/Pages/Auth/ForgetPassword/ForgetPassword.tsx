import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';

import Button from 'Components/Button';
import FormErrorMessage from 'Components/FormErrorMessage';
import TextInputField from 'Components/TextInputField';
import { routes } from 'routes';
import AuthHeader from 'Components/AuthHeader';
import { PasswordReset } from 'Interface/forgetpassword.interface';

export default function ForgetPassword() {
  const navigate = useNavigate();
  const resetPasswordSchema = yup.object().shape({
    email: yup.string().trim().required('Email Address is required.').email('Please enter your email address.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordReset>({
    resolver: yupResolver(resetPasswordSchema),
  });
  const onSubmit = () => {
    navigate(routes.resetPassword);
  };
  return (
    <>
      <div>
        <AuthHeader />
      </div>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold text-gray-900'>Forget Password ????</h2>
            <p className='mt-2'>Enter your registered email address</p>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div className='rounded-md -space-y-px'>
              <div className='pb-2'>
                <TextInputField type='email' placeholder='Email address' register={register('email')} />
              </div>
              <div><FormErrorMessage>{errors.email?.message}</FormErrorMessage></div>
              <div className='flex items-center pt-3'>
                <div className='text-sm'>Remember Password?</div>{' '}
                <Link to={routes.login} className='text-blue-600 hover:text-blue-800 ml-2 block text-sm text-gray-900'>
                  Login
                </Link>
              </div>
            </div>

            <div>
              <Button>Reset Password</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
