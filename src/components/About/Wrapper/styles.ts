import styled from "styled-components";

interface WrapperProps {
	transitionDelay?: number;
}

export const WrapperS = styled.div<WrapperProps>`
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
	transition: all 1s;
	${({ transitionDelay }) =>
		transitionDelay &&
		`
    transition-delay: ${transitionDelay}ms;
	`};

	&.hidden {
		opacity: 0;
		transform: translateX(-100%);
	}

	&.show-up {
		opacity: 1;
		transform: translateX(+0%);
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
