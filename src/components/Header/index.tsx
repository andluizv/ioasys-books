import { useUser } from "../../providers/User";
import { Aggregate, Container, Greeting, LogoImg, LogoutBtn, Name, Title, TitleContainer, UserInfo } from "./styles";
import Logo from "../../assets/logo/Logoblack.png";
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from "../../providers/Authentication";

const Header = () => {
    const { userName, clearName } = useUser();
    const { cleanToken } = useAuth();

    const handleLogout = () => {
        clearName();
        cleanToken();
    }
    return (
		<Container>
			<TitleContainer>
				<LogoImg src={Logo} alt="ioasys logo" />
				<Title>Books</Title>
			</TitleContainer>
			<UserInfo>
				<Aggregate>
					<Greeting>Bem vindo, &nbsp;</Greeting>
					<Name>{userName}</Name>
				</Aggregate>
				<LogoutBtn onClick={handleLogout}>
					<FiLogOut />
				</LogoutBtn>
			</UserInfo>
		</Container>
	);
};

export default Header;