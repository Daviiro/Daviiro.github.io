import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const ImgContainer = styled.div`
	height: 70%;
	background-image: linear-gradient(
		${(props) => props.theme.colors.background},
		#070606 50%
	);
	.Img {
	}
`;

export const Image = styled.img`
	height: 70%;
	max-height: 600px;
	min-height: 250px;
	display: block;
	margin: 0 auto;
	transition: all 2.5s;
	&.hidden {
		opacity: 0;
		transform: translateY(5%);
	}

	&.show-up {
		opacity: 1;
		transform: translateY(+0%);
	}
`;

export const InfoContent = styled.div`
	height: 30%;
	min-height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 0.5rem;

	.text {
		padding: 3rem;
		max-width: 1024px;
	}
`;
