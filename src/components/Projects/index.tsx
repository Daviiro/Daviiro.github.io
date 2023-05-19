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
						title="Gohan"
						text="Aplicação destinada a ser utilizada em um restaurante, de forma a ajudar na comodidade dos clientes em poder olhar facilmente o menu e fazer o cálculo de quanto a conta vai ficar."
						link="https://master--graceful-faun-ca790f.netlify.app/"
						imgs={[
							{
								src: "/img/react-icon.png",
								alt: "react",
							},
							{
								src: "/img/git-icon.png",
								alt: "git",
							},
							{
								src: "/img/ts-icon.png",
								alt: "ts",
							},
						]}
					/>
					<Wrapper
						title="Asgard Traduções"
						text="Website destinado a conter traduções de diferentes novels que eu traduzo nas horas vagas."
						link="https://asgardtraducoes.com/"
						imgs={[
							{
								src: "/img/react-icon.png",
								alt: "react",
							},
							{
								src: "/img/git-icon.png",
								alt: "git",
							},
							{
								src: "/img/ts-icon.png",
								alt: "ts",
							},
							{
								src: "/img/node-icon.png",
								alt: "nodejs",
							},
						]}
					/>
				</Row>
			</CenterItems>
		</Container>
	);
};

export default Projects;
