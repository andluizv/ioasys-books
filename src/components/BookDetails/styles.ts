import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: clamp(288px, 53%, 769px);
	background-color: var(--color-white);
	padding: 48px 48px 10px 48px;
	gap: 48px;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;

	@media (max-width: 650px) {
		padding: 24px;
		flex-wrap: wrap;
	}
	@media (max-width: 1070px) {
		flex-wrap: wrap;
	}
`;

export const BookCover = styled.img`
	width: clamp(240px, 50%, 349px);
	height: auto;
`;

export const Section = styled.div`
	margin: 0 0 16px 0;
`;

export const BookInfos = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: center;
	max-width: 349px;
	min-width: 240px;
`;

export const Title = styled.h1`
	font-family: "Heebo", sans-serif;
	font-size: 28px;
	font-weight: 500;
	line-height: 40px;
	color: var(--colorT-primary);
	margin: 0;
`;

export const Author = styled.h4`
	font-family: "Heebo", sans-serif;
	font-size: 12px;
	line-height: 20px;
	color: var(--colorT-secondary);
	font-weight: 400;
	margin: 0;
`;

export const SubTitle = styled.h3`
	font-family: "Heebo", sans-serif;
	font-size: 12px;
	line-height: 20px;
	color: var(--colorT-primary);
	font-weight: 500;
	margin: 0;
	text-transform: uppercase;
`;

export const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 16px 0 0 0;
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: space-between;
`;

export const Field = styled.span`
	font-family: "Heebo", sans-serif;
	font-size: 12px;
	line-height: 28px;
	color: var(--colorT-primary);
	font-weight: 500;
	margin: 0;
`;

export const FieldValue = styled.span`
	font-family: "Heebo", sans-serif;
	font-size: 12px;
	line-height: 28px;
	color: var(--colorT-text);
	font-weight: 400;
`;

export const Description = styled.p`
	font-family: "Heebo", sans-serif;
	font-size: 12px;
	line-height: 30px;
	color: var(--colorT-text);
	font-weight: 400;
	overflow-y: auto;
	max-height: 30ch;
	scrollbar-color: var(--colorT-secondary) transparent;
	scrollbar-width: 4px;
	margin: 10px 0 0 0;
`;
