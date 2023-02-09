import styled from "styled-components";

export const WrapperS = styled.div`
	height: auto;
	width: auto;
	min-height: 12rem;
	min-width: 12rem;
	max-height: 20rem;
	max-width: 21rem;
	border-radius: 15px;
	margin-top: 1rem;
	padding: 0.5rem;
	background-color: ${(props) => props.theme.colors.primary};
	hr {
		border-color: ${(props) => props.theme.colors.text};
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	text-align: center;
`;
