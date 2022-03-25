import styled from "styled-components";

export const Card = styled.div`
	min-width: 272px;
	max-width: 288px;
	height: 160px;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 15px 18px;
	background: var(--color-white);
	gap: 18px;
	box-sizing: border-box;
	flex: 0;
	cursor: pointer;
`;

export const InfosContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
`;

export const ContentBreaker = styled.div`
	display: flex;
	flex-direction: column;
`;

export const BookTitle = styled.h3`
	font-family: "Heebo", sans-serif;
	font-size: 14px;
	line-height: 20px;
	color: var(--colorT-primary);
	font-weight: 500;
	margin: 0;
`;

export const BookAuthor = styled.h4`
	font-family: "Heebo", sans-serif;
	font-size: 12px;
	line-height: 20px;
	color: var(--colorT-secondary);
	font-weight: 400;
	margin: 0;
`;

export const BookInfos = styled.span`
	font-family: "Heebo", sans-serif;
	font-size: 12px;
	line-height: 20px;
	color: #999999;
	font-weight: 400;
	display: block;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 23ch;
`;

export const BookCover = styled.img`
	width: 81px;
	::before {
		font-size: 11px;
	}
`;
