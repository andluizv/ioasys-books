import { Routes, Route } from "react-router-dom";

import RequireAuth from "./routes";

import LoginPage from "../pages/Login";
import DashboardPage from "../pages/DashBoard";

const Router = () => {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route
				path="/"
				element={
					<RequireAuth>
						<DashboardPage />
					</RequireAuth>
				}
			/>
		</Routes>
	);
};

export default Router;
