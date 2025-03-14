import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isLogged = false;
    return ( isLogged ? <Outlet /> : <Navigate to="/" /> );
}

export default PrivateRoute;