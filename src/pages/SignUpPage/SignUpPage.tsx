import { FC, FormEvent, useState } from 'react';
import { LogoIcon } from '../../components/Icons/Icons';
import { Link } from 'react-router-dom';
import { ApplicationRoutes } from '../../utils/app.utils';
import { api } from '../../utils/api.utils'

export interface SignUpFormState {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: Date;
}

const initialState: SignUpFormState = {};

const SignUpPage: FC = () => {
  const [state, setState] = useState(initialState);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(state);
    const response = await api.post(ApplicationRoutes.SignUp, state)
    console.log(response)
  };

  return (
    <main className='flex flex-col flex-1 bg-light-primary'>
      <section className='flex flex-col flex-1 items-center justify-center'>
        <LogoIcon className='size-32' />
        <form onSubmit={handleSubmit} className='w-full max-w-xl'>
          <h3 className='font-bold text-2xl mb-1'>Sign up</h3>
          <p className='text-gray-primary mb-5'>
            Please, fill all the provided fields to complete registration process
          </p>
          <div className='grid md:grid-cols-2 gap-5'>
            <div className='flex flex-col gap-2 md:col-span-2'>
              <label
                htmlFor='sign_up_email'
                className='font-noto text-xs text-gray-primary font-bold'
              >
                Email
              </label>
              <input
                defaultValue={state.email}
                type='email'
                id='sign_up_email'
                placeholder='Email'
                className='border-2 p-3 text-dark-primary bg-light-primary focus:border-green-primary outline-none rounded-lg transition-all duration-300'
                onChange={event => setState({ ...state, email: event.target.value })}
              />
            </div>
            <div className='flex flex-col gap-2 md:col-span-2'>
              <label
                htmlFor='sign_up_password'
                className='font-noto text-xs text-gray-primary font-bold'
              >
                Password
              </label>
              <input
                defaultValue={state.password}
                type='password'
                id='sign_up_password'
                placeholder='Password'
                className='border-2 p-3 text-dark-primary bg-light-primary focus:border-green-primary outline-none rounded-lg transition-all duration-300'
                onChange={event => setState({ ...state, password: event.target.value })}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='sign_up_first_name'
                className='font-noto text-xs text-gray-primary font-bold'
              >
                First name
              </label>
              <input
                defaultValue={state.firstName}
                type='text'
                id='sign_up_first_name'
                placeholder='John'
                className='border-2 p-3 text-dark-primary bg-light-primary focus:border-green-primary outline-none rounded-lg transition-all duration-300'
                onChange={event => setState({ ...state, firstName: event.target.value })}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='sign_up_last_name'
                className='font-noto text-xs text-gray-primary font-bold'
              >
                Last name
              </label>
              <input
                defaultValue={state.lastName}
                type='text'
                id='sign_up_last_name'
                placeholder='Doe'
                className='border-2 p-3 text-dark-primary bg-light-primary focus:border-green-primary outline-none rounded-lg transition-all duration-300'
                onChange={event => setState({ ...state, lastName: event.target.value })}
              />
            </div>
            <div className='flex flex-col gap-2 md:col-span-2'>
              <label
                htmlFor='sign_up_birth_date'
                className='font-noto text-xs text-gray-primary font-bold'
              >
                Birth date
              </label>
              <input
                defaultValue={state.birthDate?.toISOString()?.slice(0, 19)}
                type='date'
                id='sign_up_birth_date'
                placeholder='Date of birth'
                className='border-2 p-3 text-dark-primary bg-light-primary focus:border-green-primary outline-none rounded-lg transition-all duration-300'
                onChange={event =>
                  setState({
                    ...state,
                    birthDate: event.target.value ? new Date(event.target.value) : undefined,
                  })
                }
              />
            </div>
          </div>
          <button
            type='submit'
            className='bg-green-primary text-light-primary px-10 py-4 inline-flex w-full mt-5 rounded-xl font-medium text-center justify-center items-center transition-all duration-300 hover:bg-opacity-90 text-lg'
          >
            Sign up
          </button>
          <p className='mt-5 text-center'>
            Already have an account?{' '}
            <Link
              to={ApplicationRoutes.SignIn}
              className='text-blue-secondary border-transparent hover:border-blue-secondary border-b transition-all duration-300'
            >
              Sign in
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default SignUpPage;
