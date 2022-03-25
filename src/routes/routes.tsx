import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../providers/Authentication";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const { token } = useAuth();
	let location = useLocation();

	if (!token) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return children;
}

export default RequireAuth;
