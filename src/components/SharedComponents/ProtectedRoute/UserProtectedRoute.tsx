import { Navigate, Outlet } from 'react-router';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { EViewType } from 'Enums/EViewType';

import { userSelector } from 'Selectors/user';

interface IUserProtectedRouteProps {
  children?: ReactElement;
}

const UserProtectedRoute = ({ children }: IUserProtectedRouteProps) => {
  const user = useSelector(userSelector);
  if (!user) {
    return <Navigate replace to={`/${EViewType.LOGIN}`} />;
  }

  return children ? children : <Outlet />;
};

export default UserProtectedRoute;
