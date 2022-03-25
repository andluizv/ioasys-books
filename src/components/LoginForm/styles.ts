import styled from "styled-components";

export const Input = styled.input`
	min-height: 60px;
	background-color: rgba(0, 0, 0, 0.32);
	border-radius: 4px;
	min-width: 288px;
	max-width: 368px;
	border: none;
`;

export const Flyer = styled.div`
	display: flex;
	position: relative;
	width: max-content;
`;

export const SubmitBtn = styled.button`
	position: absolute;
	top: 12px;
	right: 12px;
	z-index: 10;
	background-color: var(--color-white);
	border: none;
	border-radius: 44px;
	width: 85px;
	height: 36px;
	color: #b22e6f;
	cursor: pointer;
	font-family: "Heebo";
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;

	:hover {
		background-color: #ffffffba;
		font-weight: 600;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const Balloon = styled.div`
	position: relative;
	background: rgba(255, 255, 255, 0.4);
	border-radius: 4px;
	width: max-content;
	padding: 16px;
	font-size: 16px;
	color: #fff;
	font-weight: 700;
	margin-top: 12px;

	:before {
		content: " ";
		position: absolute;
		width: 0px;
		height: 0px;
		transform: translate(0px, -26px);
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 10px solid rgba(255, 255, 255, 0.4);
	}
`;
