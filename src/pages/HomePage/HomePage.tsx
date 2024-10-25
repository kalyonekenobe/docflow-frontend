import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ApplicationRoutes } from '../../utils/app.utils';
import { ArrowRightIcon } from '../../components/Icons/Icons';

const HomePage: FC = () => {
  return (
    <main className='flex flex-col flex-1 bg-light-primary'>
      <section className='flex flex-col flex-1 items-center justify-center min-h-[calc(100vh_-_9.5em)]'>
        <h2 className='font-extrabold text-center text-6xl'>Order Your Document</h2>
        <p className='font-bold text-center max-w-2xl text-lg my-20'>
          Need a document fast? Simply fill out the form below to get started. We offer a wide range
          of documents, and our secure platform makes it easy to place your order and track
          delivery. Select your document, enter the necessary details, and choose your preferred
          delivery method. It's that simple!
        </p>
        <Link
          to={ApplicationRoutes.Profile}
          className='inline-flex gap-3 items-center text-light-primary bg-green-primary rounded-xl px-14 py-7 font-medium text-xl hover:bg-opacity-90 transition-all duration-300'
        >
          Check available documents
          <ArrowRightIcon className='size-7' />
        </Link>
      </section>
      <section className='bg-green-secondary p-28'>
        <form className='bg-light-primary rounded-3xl w-full h-[500px]'></form>
      </section>
    </main>
  );
};

export default HomePage;
