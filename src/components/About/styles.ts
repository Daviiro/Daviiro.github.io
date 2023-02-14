import styled, { keyframes } from "styled-components";

export const Container = styled.div`
	height: auto;
	width: 100%;
	background-image: linear-gradient(
		#070606 1%,
		${(props) => props.theme.colors.background}
	);

	.text {
		padding: 3rem;
		max-width: 1024px;
		text-align: center;
	}
`;

export const CenterItems = styled.div`
	max-width: 1024px;
	margin: 0 auto;
	padding: 2rem;
`;

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	transition: all 2s;
`;
