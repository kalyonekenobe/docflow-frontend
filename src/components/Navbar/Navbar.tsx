import { FC } from 'react';
import { LogoIcon, SearchIcon, UserIcon } from '../Icons/Icons';
import { Link, NavLink } from 'react-router-dom';
import { ApplicationRoutes } from '../../utils/app.utils';

const Navbar: FC = () => {
  return (
    <div className='bg-light-primary text-dark-primary py-5 px-28 flex items-center sticky top-0 z-50'>
      <div className='flex items-center gap-5'>
        <LogoIcon className='size-28 hover:text-dark-secondary transition-all duration-300 cursor-pointer' />
      </div>
      <div className='flex flex-1 items-center justify-center gap-5'>
        <nav className='flex items-center justify-center gap-20 text-lg font-semibold'>
          <NavLink
            to={ApplicationRoutes.Root}
            className={({ isActive }) =>
              isActive
                ? 'border-y-2 border-transparent text-dark-secondary border-b-dark-secondary transition-all duration-300 cursor-pointer'
                : 'border-y-2 border-transparent hover:text-dark-secondary hover:border-b-dark-secondary transition-all duration-300 cursor-pointer'
            }
          >
            Home
          </NavLink>
          <NavLink
            to={ApplicationRoutes.Service}
            className={({ isActive }) =>
              isActive
                ? 'border-y-2 border-transparent text-dark-secondary border-b-dark-secondary transition-all duration-300 cursor-pointer'
                : 'border-y-2 border-transparent hover:text-dark-secondary hover:border-b-dark-secondary transition-all duration-300 cursor-pointer'
            }
          >
            Service
          </NavLink>
          <NavLink
            to={ApplicationRoutes.Docs}
            className={({ isActive }) =>
              isActive
                ? 'border-y-2 border-transparent text-dark-secondary border-b-dark-secondary transition-all duration-300 cursor-pointer'
                : 'border-y-2 border-transparent hover:text-dark-secondary hover:border-b-dark-secondary transition-all duration-300 cursor-pointer'
            }
          >
            Docs
          </NavLink>
          <NavLink
            to={ApplicationRoutes.Contact}
            className={({ isActive }) =>
              isActive
                ? 'border-y-2 border-transparent text-dark-secondary border-b-dark-secondary transition-all duration-300 cursor-pointer'
                : 'border-y-2 border-transparent hover:text-dark-secondary hover:border-b-dark-secondary transition-all duration-300 cursor-pointer'
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
      <div className='flex gap-14 items-center'>
        <div className='flex items-center gap-5'>
          <SearchIcon className='size-8 stroke-2 hover:text-dark-secondary transition-all duration-300 cursor-pointer' />
          <Link
            to={ApplicationRoutes.Profile}
            className='hover:text-dark-secondary transition-all duration-300 cursor-pointer'
          >
            <UserIcon className='size-8 stroke-2' />
          </Link>
        </div>
        <Link
          to={ApplicationRoutes.SignUp}
          className='text-light-primary bg-dark-primary rounded-lg px-8 py-3 font-semibold hover:bg-dark-secondary transition-all duration-300'
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
