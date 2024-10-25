import { FC } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';

const WithNavbarTemplate: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default WithNavbarTemplate;
