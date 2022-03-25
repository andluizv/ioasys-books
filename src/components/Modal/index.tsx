import { CloseBtn, Container } from "./styles"
import { VscChromeClose } from 'react-icons/vsc'
const Modal = (props: any) => {
    const { func, children } = props;

    return (
        <Container onClick={func}>
            <CloseBtn onClick={func}><VscChromeClose /></CloseBtn>
            {children}
        </Container>
    )
};

export default Modal;