import styled from "styled-components";

export const Container = styled.div`
	min-width: 100%;
	height: max-content;
	background-color: rgba(0, 0, 0, 0.4);
	position: absolute;
	z-index: 999;
	display: grid;
	place-items: center;
	align-content: baseline;
	justify-items: center;
	padding: 16px;
	box-sizing: border-box;

	@media (max-width: 1070px) {
		height: max-content;
	}
`;

export const CloseBtn = styled.button`
	width: 32px;
	height: 32px;
	display: block;
	border-radius: 100%;
	border: 1px solid rgba(51, 51, 51, 0.2);
	background-color: var(--color-white);
	align-self: start;
	justify-self: end;
	margin: 16px 16px 34px;

	@media (max-width: 650px) {
		margin: 0 0 16px 0;
	}
`;
