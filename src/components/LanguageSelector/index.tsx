import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

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
			<button onClick={() => handleChangeLanguage("pt")}>
				Português
			</button>

			<button onClick={() => handleChangeLanguage("en")}>Inglês</button>
		</div>
	);
};

export default LanguageSelector;
