import React from "react";
import { Container, NavContent } from "./styles";

const Header: React.FC = () => {
	return (
		<Container>
			<NavContent>
				<img
					src={process.env.PUBLIC_URL + "/img/Logo.png"}
					width="16.5px"
				/>
			</NavContent>
		</Container>
	);
};

export default Header;
