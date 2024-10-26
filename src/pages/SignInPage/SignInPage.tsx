import { FC, FormEvent, useState } from 'react';
import { LogoIcon } from '../../components/Icons/Icons';
import { ApplicationRoutes } from '../../utils/app.utils';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../utils/api.utils'
import cookies from 'js-cookie';

export interface SignInFormState {
  email?: string;
  password?: string;
}

const initialState: SignInFormState = {};

const SignInPage: FC = () => {
  const [state, setState] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(state);
    const response = await api.post(ApplicationRoutes.SignIn, state);
    console.log(response.data)
    cookies.set(import.meta.env.VITE_COOKIE_ACCESS_TOKEN_NAME || 'Docflow-Access-Token', response.data.token);
    navigate(ApplicationRoutes.Root)
  };

  return (
    <main className='flex flex-col flex-1 bg-light-primary'>
      <section className='flex flex-col flex-1 items-center justify-center'>
        <LogoIcon className='size-32' />
        <form onSubmit={handleSubmit} className='w-full max-w-xl'>
          <h3 className='font-bold text-2xl mb-1'>Sign in</h3>
          <p className='text-gray-primary mb-5'>
            Please, enter your email and password to login into your account
          </p>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='sign_in_email'
                className='font-noto text-xs text-gray-primary font-bold'
              >
                Email
              </label>
              <input
                defaultValue={state.email}
                type='email'
                id='sign_in_email'
                placeholder='Email'
                className='border-2 p-3 text-dark-primary bg-light-primary focus:border-green-primary outline-none rounded-lg transition-all duration-300'
                onChange={event => setState({ ...state, email: event.target.value })}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label
                htmlFor='sign_in_password'
                className='font-noto text-xs text-gray-primary font-bold'
              >
                Password
              </label>
              <input
                defaultValue={state.password}
                type='password'
                id='sign_in_password'
                placeholder='Password'
                className='border-2 p-3 text-dark-primary bg-light-primary focus:border-green-primary outline-none rounded-lg transition-all duration-300'
                onChange={event => setState({ ...state, password: event.target.value })}
              />
            </div>
          </div>
          <button
            type='submit'
            className='bg-green-primary text-light-primary px-10 py-4 inline-flex w-full mt-5 rounded-xl font-medium text-center justify-center items-center transition-all duration-300 hover:bg-opacity-90 text-lg'
          >
            Sign in
          </button>
          <p className='mt-5 text-center'>
            Do not have an account yet?{' '}
            <Link
              to={ApplicationRoutes.SignUp}
              className='text-blue-secondary border-transparent hover:border-blue-secondary border-b transition-all duration-300'
            >
              Sign up
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default SignInPage;
