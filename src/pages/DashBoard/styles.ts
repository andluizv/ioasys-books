import styled from "styled-components";
import background from "../../assets/backgrounds/DashBackground.png";

export const Container = styled.main`
	background-image: url(${background});
	width: 100vw;
	height: 100vh;
	background-size: cover;
    background-blend-mode: darken;
    transform: matrix(1, 0, 0, 1, 0, 0);
	display: flex;
    flex-direction: column;
	align-items: center;
`;

export const BooksList = styled.div`
    display: flex;
    gap: 15px;
    max-width: 1135px;
    flex-wrap: wrap;
    justify-content: center;
`

export const PaginationContainer = styled.div`
	align-self: flex-end;
	padding: 5px clamp(15px, 10vw, 135px);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const PageCounter = styled.span`
    font-family: 'Heebo', sans-serif;
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    margin-right: 15px;
`;
export const PageNumber = styled.span`
	font-family: "Heebo", sans-serif;
	font-size: 12px;
	line-height: 20px;
	font-weight: 500;
`;

export const PaginationBtn = styled.button`
	width: 32px;
	height: 32px;
	border-radius: 100%;
	border: 1px solid rgba(51, 51, 51, 0.2);
    font-size: 16px;
    background-color: transparent;
`;