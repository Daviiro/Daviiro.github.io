import React from "react";
import { Container } from "./styles";
import { useTranslation } from "react-i18next";
import TypeWriter from "../TypeWriter";
import { useInView } from "react-intersection-observer";

const Projects: React.FC = () => {
	const { ref: myRef, inView: isVisible } = useInView({ triggerOnce: true });
	const { t, i18n } = useTranslation();
	const selectedLanguage = i18n.language;
	return (
		<Container>
			<h2 className="text" ref={myRef}>
				{isVisible && (
					<TypeWriter
						key={selectedLanguage}
						text={t("projects")}
						delay={55}
					/>
				)}
			</h2>
		</Container>
	);
};

export default Projects;
