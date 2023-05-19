import React from "react";
import { Container, CenterItems, Row } from "./styles";
import { useTranslation } from "react-i18next";
import TypeWriter from "../TypeWriter";
import { useInView } from "react-intersection-observer";
import Wrapper from "./Wrapper";

const Projects: React.FC = () => {
	const { ref: myRef, inView: isVisible } = useInView({ triggerOnce: true });
	const { t, i18n } = useTranslation();
	const selectedLanguage = i18n.language;

	return (
		<Container>
			<CenterItems>
				<h2 className="text" ref={myRef}>
					{isVisible && (
						<TypeWriter
							key={selectedLanguage}
							text={t("projects")}
							delay={55}
						/>
					)}
				</h2>
				<Row>
					<Wrapper
						title="text"
						text="text textddd"
						imgs={[
							{
								src: "/img/git-icon.png",
								alt: "teste",
							},
							{
								src: "/img/ts-icon.png",
								alt: "fdf",
							},
						]}
					/>
				</Row>
			</CenterItems>
		</Container>
	);
};

export default Projects;
