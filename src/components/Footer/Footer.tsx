import { FC } from 'react';
import { FacebookIcon, InstagramIcon, LogoIcon, TwitterXIcon } from '../Icons/Icons';

const Footer: FC = () => {
  return (
    <footer className='flex flex-col py-20 px-32 bg-green-primary text-light-secondary min-h-[400px]'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <LogoIcon className='size-28' />
          <p className='font-bold max-w-[200px]'>Fast and secure document ordering made easy.</p>
        </div>
        <div className='flex gap-40 px-20'>
          <div className='flex flex-col gap-7'>
            <h4 className='font-bold text-xl'>About</h4>
            <div className='flex flex-col gap-5 font-bold'>
              <a className='flex gap-2 items-center' href='https://instagram.com'>
                Home
              </a>
              <a className='flex gap-2 items-center' href='https://facebook.com'>
                Resources
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-7'>
            <h4 className='font-bold text-xl'>Support</h4>
            <div className='flex flex-col gap-5 font-bold'>
              <a className='flex gap-2 items-center' href='https://instagram.com'>
                FAQ
              </a>
              <a className='flex gap-2 items-center' href='https://facebook.com'>
                Contact us
              </a>
              <a className='flex gap-2 items-center' href='https://x.com'>
                Terms of service
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-7'>
            <h4 className='font-bold text-xl'>Our Social</h4>
            <div className='flex flex-col gap-5 font-bold'>
              <a className='flex gap-2 items-center' href='https://instagram.com'>
                <InstagramIcon className='size-5 w-[32px] aspect-square' /> Instagram
              </a>
              <a className='flex gap-2 items-center' href='https://facebook.com'>
                <FacebookIcon className='size-6 w-[32px] aspect-square' /> Facebook
              </a>
              <a className='flex gap-2 items-center' href='https://x.com'>
                <TwitterXIcon className='size-5 w-[32px] aspect-square' /> Twitter (X)
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
