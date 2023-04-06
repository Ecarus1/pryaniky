import {Navigate} from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux-hook';

interface IPublicRoute {
  children: React.ReactNode;
}

function PublicRoute({children}: IPublicRoute) {
    const select = useAppSelector(state => ({
      exists: state.auth.exists
    }))

    if (select.exists) {
        return <Navigate to='/'/>
    }

    return <>{children}</>;
}
 
export default PublicRoute;