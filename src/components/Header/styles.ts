import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 40px clamp(15px, 8.5vw, 115px);
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	align-items: center;
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
`;

export const Title = styled.h1`
    margin: 0 0 2px 0;
    font-family: 'Heebo',
    font-size: 28px;
    font-weight: 300;
    color: var(--colorT-primary);
`;

export const LogoImg = styled.img`
	background-size: cover;
	width: 104.4px;
	height: 36px;
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
`;

export const Greeting = styled.span`
	font-family: "Heebo", sans-serif;
	font-size: 12px;
	line-height: 16px;
	font-weight: 400;
`;

export const Name = styled.span`
	font-family: "Heebo", sans-serif;
	font-size: 12px;
	line-height: 16px;
	font-weight: 500;
`;

export const LogoutBtn = styled.button`
	border-radius: 100%;
	width: 32px;
	height: 32px;
	background: transparent;
	border: 1px solid rgba(51, 51, 51, 0.2);
	color: #333333;
	display: grid;
	place-items: center;
`;

export const Aggregate = styled.div`
	@media (max-width: 555px) {
		display: none;
	}
`;
