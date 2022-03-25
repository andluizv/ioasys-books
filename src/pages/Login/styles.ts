import styled from "styled-components";
import backgroundFull from "../../assets/backgrounds/BackgroundFull.png";

export const Container = styled.div`
	background-image: url(${backgroundFull});
	width: 100vw;
	height: 100vh;
	background-size: cover;
	background-position: 45%;
	display: flex;
	align-items: center;
`;

export const Content = styled.div`
	margin-left: clamp(6px, 5vw, 115px);
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 20px;
	margin-bottom: 40px;

	@media (max-width: 340px) {
		gap: 14px;
	}
`;

export const Title = styled.h1`
	margin: 0 0 2px 0;
	font-weight: 300;
	font-size: 28px;
	color: var(--color-white);
	font-family: "Heebo", sans-serif;
`;

export const LogoImg = styled.img`
	background-size: cover;
	width: 104.4px;
	height: 36px;
`;
