import React from "react";
import { Container, NavContent } from "./styles";
import LanguageSelector from "../LanguageSelector";

const Header: React.FC = () => {
	return (
		<Container>
			<NavContent>
				<img
					src={process.env.PUBLIC_URL + "/img/Logo.png"}
					alt="Logo"
					width="16.5px"
				/>
				<LanguageSelector />
			</NavContent>
		</Container>
	);
};

export default Header;
