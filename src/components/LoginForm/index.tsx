import { useAuth } from "../../providers/Authentication";
import api from "../../services";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent, useState } from "react";
import { useUser } from "../../providers/User";
import { Balloon, Flyer, Form, SubmitBtn } from "./styles";
import CustomInput from "./CustomInput";

export const LoginForm = () => {
    const { updateToken } = useAuth();
    const { updateName } = useUser();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            "email": email,
            "password": password,
        }
        api.post('/auth/sign-in', data).then(response => {
            const token = response.headers['authorization'];
            const refreshToken = response.headers['refresh-token'];
            const name = response.data.name;

            updateToken(token, refreshToken);
            updateName(name);
            navigate('/');
         }).catch(error => {
            // setLoginError(error.response.data.errors.message);
            setLoginError("Email e/ou senha incorretos.")
         })
    }

    const errorInfo = (message: string) => {
        return (
            <Balloon>
                {message}
            </Balloon>
        )
    }
    return (
		<>
			<Form onSubmit={handleLogin}>
				<CustomInput type="email" label="Email" placeholder=" " value={email} func={setEmail}/>
				<Flyer>
					<CustomInput
						type="password"
						label="Password"
                        placeholder=" "
                        value={password}
                        func={setPassword}
					/>
					<SubmitBtn type="submit">Entrar</SubmitBtn>
				</Flyer>
					{loginError && errorInfo(loginError)}
			</Form>
		</>
	);
};
