import styled from "styled-components";

export const Container = styled.nav`
	height: 44px;
	background: rgba(22, 22, 23, 0.8);
	z-index: 9999;
	margin: 0;
	width: 100%;
	min-width: 320px;
	height: 48px;
	max-height: 44px;
	-webkit-user-select: none;
	user-select: none;
	font-size: 14px;
`;

export const NavContent = styled.div`
	margin: 0 auto;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	max-width: 1024px;
	padding: 0 22px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
