import { createContext, useContext, useState } from "react";
import { IProvidersProps } from "../../types";

interface IUserProps {
	userName: string;
	updateName: (newName: string) => void;
	clearName: () => void;
}

const UserContext = createContext({} as IUserProps);
export const UserProvider = ({ children }: IProvidersProps) => {
	const [userName, setUserName] = useState(
		localStorage.getItem("@ioasys-books-userName") || ""
	);

    const updateName = (name: string) => {
        setUserName(name);
        localStorage.setItem("@ioasys-books-userName", name)
    };

	const clearName = () => {
		setUserName("");
	}
	return (
		<UserContext.Provider
			value={{
				userName,
				updateName,
				clearName,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
