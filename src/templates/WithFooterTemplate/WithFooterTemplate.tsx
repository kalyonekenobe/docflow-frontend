import { FC } from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const WithFooterTemplate: FC = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default WithFooterTemplate;
