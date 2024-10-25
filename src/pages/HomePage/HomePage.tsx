import { FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApplicationRoutes } from '../../utils/app.utils';
import { ArrowRightIcon } from '../../components/Icons/Icons';
import Select, { Option } from '../../components/Select/Select';

export interface OrderFormState {
  faculty?: string | number;
  specialty?: string | number;
  yearOfStudy?: string | number;
  documentType?: string | number;
}

const initialState: OrderFormState = {};

const HomePage: FC = () => {
  const [state, setState] = useState(initialState);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(state);
    setState({
      specialty: -1,
      faculty: -1,
      yearOfStudy: -1,
      documentType: -1,
    });
  };

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
          className='inline-flex gap-3 items-center text-light-primary bg-green-primary rounded-xl px-14 py-7 font-medium text-xl hover:bg-opacity-90 transition-all duration-300 text-center'
        >
          Check available documents
          <ArrowRightIcon className='size-7' />
        </Link>
      </section>
      <section className='bg-green-secondary py-40 px-60'>
        <form
          className='bg-light-primary rounded-3xl w-full p-10 flex flex-col gap-10'
          onSubmit={handleSubmit}
        >
          <Select
            defaultValue={state.faculty}
            label='Faculty'
            onChoose={value => setState(prevState => ({ ...prevState, faculty: value }))}
          >
            <Option value='1'>Dropdown option 1</Option>
            <Option value='2'>Dropdown option 2</Option>
            <Option value='3'>Dropdown option 3</Option>
          </Select>
          <Select
            defaultValue={state.specialty}
            label='Specialty'
            onChoose={value => setState(prevState => ({ ...prevState, specialty: value }))}
          >
            <Option value='1'>Dropdown option 1</Option>
            <Option value='2'>Dropdown option 2</Option>
            <Option value='3'>Dropdown option 3</Option>
          </Select>
          <Select
            defaultValue={state.yearOfStudy}
            label='Year of study'
            onChoose={value => setState(prevState => ({ ...prevState, yearOfStudy: value }))}
          >
            <Option value='1'>Dropdown option 1</Option>
            <Option value='2'>Dropdown option 2</Option>
            <Option value='3'>Dropdown option 3</Option>
          </Select>
          <Select
            defaultValue={state.documentType}
            label='Document type'
            onChoose={value => setState(prevState => ({ ...prevState, documentType: value }))}
          >
            <Option value='1'>Dropdown option 1</Option>
            <Option value='2'>Dropdown option 2</Option>
            <Option value='3'>Dropdown option 3</Option>
          </Select>
          <button
            type='submit'
            className='self-start inline-flex gap-3 items-center text-light-primary bg-green-primary rounded-lg px-10 py-4 hover:bg-opacity-90 transition-all duration-300'
          >
            Order document
          </button>
        </form>
      </section>
    </main>
  );
};

export default HomePage;
