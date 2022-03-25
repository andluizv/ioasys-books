import styled from "styled-components";

export const InputContainer = styled.div`
	position: relative;

	:focus > label {
		transform: translate(16px, 4px) scale(0.75);
	}
`;

export const Label = styled.label`
	position: absolute;
	left: 0;
	font-size: 16px;
	transform: translate(16px, 20px) scale(1);
	transform-origin: top left;
	transition: all 0.1s ease-in-out;
	color: #fff;
	opacity: 0.5;
`;

export const Input = styled.input`
	border: none;
	padding: 16px 20px 0px;
	background-color: rgba(0, 0, 0, 0.32);
	border-radius: 4px;
	height: 60px;
	width: clamp(288px, 27vw, 368px);
	box-sizing: border-box;
	color: var(--color-white);
	font-size: 16px;
	font-family: "Heebo", sans-serif;

	&:focus + label,
	:hover + label,
	:not(:placeholder-shown) + label {
		transform: translate(20px, 10px) scale(0.75);
	}
`;
