import styled from "styled-components";

interface WrapperProps {
	transitionDelay?: number;
}

export const WrapperS = styled.div<WrapperProps>`
	width: auto;
	height: 17rem;
	min-width: 12rem;
	max-height: 20rem;
	max-width: 21rem;
	border-radius: 15px;
	margin-top: 1rem;
	padding: 1.2rem;
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

	color: "#ffffff";
`;

export const ImgS = styled.img`
	width: 32px;
	margin: 0.1rem;
	padding: 0.1rem;

	&:hover {
		padding: 0;
	}
`;
