import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router';

export interface AuthProtectedRouteState {
  isLoaded: boolean;
}

const initialState: AuthProtectedRouteState = {
  isLoaded: false,
};

const AuthProtectedRoute: FC = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (!state.isLoaded) {
      setState({ ...state, isLoaded: true });
    } else {
      // Make an request to check user is authenticated
    }
  }, [state.isLoaded]);

  return <Outlet />;
};

export default AuthProtectedRoute;
