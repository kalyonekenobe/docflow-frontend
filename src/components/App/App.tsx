import { FC } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApplicationRoutes } from '../../utils/app.utils';
import HomePage from '../../pages/HomePage/HomePage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ServicePage from '../../pages/ServicePage/ServicePage';
import AuthProtectedRouteTemplate from '../../templates/AuthProtectedRouteTemplate/AuthProtectedRouteTemplate';
import AppTemplate from '../../templates/AppTemplate/AppTemplate';
import WithNavbarTemplate from '../../templates/WithNavbarTemplate/WithNavbarTemplate';
import WithFooterTemplate from '../../templates/WithFooterTemplate/WithFooterTemplate';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={AppTemplate}>
          <Route path={ApplicationRoutes.SignIn} Component={SignInPage} />
          <Route path={ApplicationRoutes.SignUp} Component={SignUpPage} />
          <Route Component={AuthProtectedRouteTemplate}>
            <Route Component={WithNavbarTemplate}>
              <Route Component={WithFooterTemplate}>
                <Route index path={ApplicationRoutes.Root} Component={HomePage} />
                <Route path={ApplicationRoutes.Profile} Component={ProfilePage} />
                <Route path={ApplicationRoutes.Service} Component={ServicePage} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
