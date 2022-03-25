import { IProvidersProps } from "../types";
import { AuthProvider } from "./Authentication";
import { UserProvider } from "./User";

const Providers = ({ children }: IProvidersProps) => {
	return (
		<AuthProvider>
			<UserProvider>{children}</UserProvider>
		</AuthProvider>
	);
};

export default Providers;
