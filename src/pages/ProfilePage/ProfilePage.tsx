import { FC, useEffect, useMemo, useState } from 'react';
import { PdfIcon, ThreeVerticalDotsIcon, UserCircleIcon } from '../../components/Icons/Icons';
import { api } from '../../utils/api.utils'

export interface UserState {
  email: string;
  FirstName:  string;
	LastName:    string;
	DateOfBirth: Date;
	Email:       string;
	Password:    string;
}

const initialState: UserState = {
  email: "",
  FirstName:  "",
	LastName:    "",
	DateOfBirth: new Date(),
	Email:       "",
	Password:    ""
};

const ProfilePage: FC = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const request = async () => {
      const response = await api.get("user");
      setState({...state, ...response.data.user})
    }
    request()
  }, [])
  console.log(state)

  const dateFormatter = useMemo(
    () => new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }),
    [],
  );

  return (
    <main className='flex flex-col flex-1'>
      <section className='flex items-start px-28 py-10'>
        <div className='flex gap-5 flex-1 items-center'>
          <UserCircleIcon className='size-28 text-dark-secondary' />
          <div className='flex flex-col'>
            <h3 className='font-bold text-3xl'>{state.FirstName} {state.LastName}</h3>
            <p className='font-medium text-dark-secondary'>{state.Email}</p>
            {/* <span className='text-sm text-dark-secondary mt-2'>
              {dateFormatter.format(new Date(2004, 8, 3))}
            </span> */}
          </div>
        </div>
        {/* <div className='flex gap-2'>
          <button
            type='button'
            className='bg-green-primary text-light-primary px-8 py-3 inline-flex rounded-lg font-medium text-center justify-center items-center transition-all duration-300 hover:bg-opacity-90'
          >
            Edit
          </button>
        </div> */}
      </section>
      {/* <section className='bg-green-secondary px-28 py-20'>
        <h3 className='font-bold text-3xl'>Documents</h3>
        <div className='flex flex-col mt-10'>
          <div className='border bg-light-primary rounded-xl overflow-hidden'>
            <div className='bg-gray-light grid grid-cols-[6.75fr_1fr_1fr_0.25fr] col-span-full px-5 py-3 rounded-t-xl'>
              <span className='font-noto text-xs font-medium'>Name</span>
              <span className='font-noto text-xs font-medium'>File size</span>
              <span className='font-noto text-xs font-medium'>Date</span>
            </div>
            <div className='flex flex-col divide-y'>
              <div className='bg-light-primary grid grid-cols-[6.75fr_1fr_1fr_0.25fr] px-5 py-5'>
                <div className='flex gap-5 items-center'>
                  <PdfIcon className='size-10' />
                  <div className='flex flex-col gap-0.5'>
                    <h5 className='font-medium text-sm text-dark-secondary font-noto'>
                      Passport.pdf
                    </h5>
                    <p className='text-sm font-noto text-gray-primary'>200 KB</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <p className='text-sm font-noto text-gray-primary'>200 KB</p>
                </div>
                <div className='flex items-center'>
                  <p className='text-sm font-noto text-gray-primary'>
                    {dateFormatter.format(new Date(2024, 0, 4))}
                  </p>
                </div>
                <div className='flex items-center'>
                  <button
                    type='button'
                    className='cursor-pointer hover:bg-gray-light p-2 rounded-full transition-all duration-300'
                  >
                    <ThreeVerticalDotsIcon className='size-6 text-gray-primary' />
                  </button>
                </div>
              </div>
              <div className='bg-light-primary grid grid-cols-[6.75fr_1fr_1fr_0.25fr] px-5 py-5'>
                <div className='flex gap-5 items-center'>
                  <PdfIcon className='size-10' />
                  <div className='flex flex-col gap-0.5'>
                    <h5 className='font-medium text-sm text-dark-secondary font-noto'>
                      Passport.pdf
                    </h5>
                    <p className='text-sm font-noto text-gray-primary'>200 KB</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <p className='text-sm font-noto text-gray-primary'>200 KB</p>
                </div>
                <div className='flex items-center'>
                  <p className='text-sm font-noto text-gray-primary'>
                    {dateFormatter.format(new Date(2024, 0, 4))}
                  </p>
                </div>
                <div className='flex items-center'>
                  <button
                    type='button'
                    className='cursor-pointer hover:bg-gray-light p-2 rounded-full transition-all duration-300'
                  >
                    <ThreeVerticalDotsIcon className='size-6 text-gray-primary' />
                  </button>
                </div>
              </div>
              <div className='bg-light-primary grid grid-cols-[6.75fr_1fr_1fr_0.25fr] px-5 py-5'>
                <div className='flex gap-5 items-center'>
                  <PdfIcon className='size-10' />
                  <div className='flex flex-col gap-0.5'>
                    <h5 className='font-medium text-sm text-dark-secondary font-noto'>
                      Passport.pdf
                    </h5>
                    <p className='text-sm font-noto text-gray-primary'>200 KB</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <p className='text-sm font-noto text-gray-primary'>200 KB</p>
                </div>
                <div className='flex items-center'>
                  <p className='text-sm font-noto text-gray-primary'>
                    {dateFormatter.format(new Date(2024, 0, 4))}
                  </p>
                </div>
                <div className='flex items-center'>
                  <button
                    type='button'
                    className='cursor-pointer hover:bg-gray-light p-2 rounded-full transition-all duration-300'
                  >
                    <ThreeVerticalDotsIcon className='size-6 text-gray-primary' />
                  </button>
                </div>
              </div>
              <div className='bg-light-primary grid grid-cols-[6.75fr_1fr_1fr_0.25fr] px-5 py-5'>
                <div className='flex gap-5 items-center'>
                  <PdfIcon className='size-10' />
                  <div className='flex flex-col gap-0.5'>
                    <h5 className='font-medium text-sm text-dark-secondary font-noto'>
                      Passport.pdf
                    </h5>
                    <p className='text-sm font-noto text-gray-primary'>200 KB</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <p className='text-sm font-noto text-gray-primary'>200 KB</p>
                </div>
                <div className='flex items-center'>
                  <p className='text-sm font-noto text-gray-primary'>
                    {dateFormatter.format(new Date(2024, 0, 4))}
                  </p>
                </div>
                <div className='flex items-center'>
                  <button
                    type='button'
                    className='cursor-pointer hover:bg-gray-light p-2 rounded-full transition-all duration-300'
                  >
                    <ThreeVerticalDotsIcon className='size-6 text-gray-primary' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default ProfilePage;
