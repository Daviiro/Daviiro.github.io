import styled from "styled-components";

export const Container = styled.div`
	height: auto;
	width: 100%;
	background-color: ${(props) => props.theme.colors.background};

	.text {
		padding: 3rem;
		max-width: 1024px;
		text-align: center;
	}
`;
