import { LoginForm } from "../../components/LoginForm";
import { Container, Content, LogoImg, Title, TitleContainer } from "./styles";
import Logo from '../../assets/logo/Logo.png';

const LoginPage = () => {
    return (
        <Container>
            <Content>
                <TitleContainer>
                    <LogoImg src={Logo} alt='Logo'/>
                    <Title>Books</Title>
                </TitleContainer>

                <LoginForm />
            </Content>

        </Container>
    );
};

export default LoginPage;