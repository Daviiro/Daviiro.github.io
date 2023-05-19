import React from "react";
import { Container, CenterItems, Row } from "./styles";
import Wrapper from "./Wrapper";
import TypeWriter from "../TypeWriter";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
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
							text={t("tech")}
							delay={55}
						/>
					)}
				</h2>

				<Row>
					<Wrapper
						img="/img/C-icon.png"
						title={t("c")}
						text={t("cDesc")}
						delay={100}
					></Wrapper>
					<Wrapper
						img="/img/react-icon.png"
						title={t("react")}
						text={t("reactDesc")}
						delay={200}
					></Wrapper>
				</Row>
				<Row>
					<Wrapper
						img="/img/js-icon.png"
						title={t("js")}
						text={t("jsDesc")}
						delay={150}
					></Wrapper>
					<Wrapper
						img="/img/node-icon.png"
						title={t("node")}
						text={t("nodeDesc")}
						delay={250}
					></Wrapper>
				</Row>
				<Row>
					<Wrapper
						img="/img/ts-icon.png"
						title={t("ts")}
						text={t("tsDesc")}
						delay={200}
					></Wrapper>
					<Wrapper
						img="/img/git-icon.png"
						title={t("git")}
						text={t("gitDesc")}
						delay={300}
					></Wrapper>
				</Row>
				<Row>
					<Wrapper
						img="/img/mongodb-icon.png"
						title={t("mongodb")}
						text={t("mongodbDesc")}
						delay={200}
					></Wrapper>
				</Row>
			</CenterItems>
		</Container>
	);
};

export default About;
