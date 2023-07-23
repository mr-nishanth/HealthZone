import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
    children: JSX.Element;
};

const Protected = ({ children }: Props) => {
    // const [isAuth, setIsAuth] = useState<boolean>(false);
    const location = useLocation().pathname;

    // return isAuth ? (
    //     <>{children}</>
    // ) : (
    //     <Navigate
    //         to={`/`}
    //         state={{ from: location }}
    //         replace
    //     />
    // );
};
export default Protected;
