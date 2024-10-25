import { FC } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApplicationRoutes } from '../../utils/app.utils';
import HomePage from '../../pages/HomePage/HomePage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import SignUpPage from '../../pages/SignUpPage/SignUpPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ServicePage from '../../pages/ServicePage/ServicePage';
import AuthProtectedRoute from '../../templates/AuthProtectedRoute/AuthProtectedRoute';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ApplicationRoutes.SignIn} Component={SignInPage} />
        <Route path={ApplicationRoutes.SignUp} Component={SignUpPage} />
        <Route Component={AuthProtectedRoute}>
          <Route index path={ApplicationRoutes.Root} Component={HomePage} />
          <Route path={ApplicationRoutes.Profile} Component={ProfilePage} />
          <Route path={ApplicationRoutes.Service} Component={ServicePage} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
