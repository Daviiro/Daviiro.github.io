import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Flag from "../Flag";
import BrasilFlag from "../../assets/brasil-flag.svg";
import EUAFlag from "../../assets/eua-flag.svg";

const LanguageSelector: React.FC = () => {
	const { i18n } = useTranslation();
	const selectedLanguage = i18n.language; // Idioma selecionado

	const handleChangeLanguage = (language: string) => {
		if (selectedLanguage !== language) i18n.changeLanguage(language);
	};

	useEffect(() => {
		console.log(selectedLanguage);
	}, [selectedLanguage]);

	return (
		<div>
			<div onClick={() => handleChangeLanguage("pt")}>
				<Flag
					image={BrasilFlag}
					isSelected={selectedLanguage === "pt"}
				/>
			</div>

			<button onClick={() => handleChangeLanguage("en")}>Inglês</button>
		</div>
	);
};

export default LanguageSelector;
