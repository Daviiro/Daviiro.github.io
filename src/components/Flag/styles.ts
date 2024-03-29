import styled from "styled-components";

export const StyledImage = styled.img`
	cursor: pointer;
	width: 35px;
	height: 35px;
	margin: 10px;
	filter: grayscale(1);

	&:hover {
		filter: grayscale(0.5);
	}
	&.selected {
		filter: grayscale(0);
	}
	&.selected:hover {
		filter: grayscale(0);
	}
`;
