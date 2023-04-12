import React, { useState, useEffect, memo } from "react";
import { Container, ImgContainer, Image, InfoContent } from "./styles";
import TypeWriter from "../TypeWriter";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const Content: React.FC = () => {
	const [delay, setDelay] = useState(true);
	const { ref: myRef, inView: isVisible } = useInView({ triggerOnce: true });
	const { t, i18n } = useTranslation();
	const selectedLanguage = i18n.language;

	useEffect(() => {
		setTimeout(() => {
			setDelay(false);
		}, 650);
	}, []);

	return (
		<Container>
			<InfoContent>
				<h2 className="text" style={{ padding: "12px" }}>
					<TypeWriter
						key={selectedLanguage}
						text={t("hello")}
						delay={100}
					/>
				</h2>
				<span style={{ padding: "12px" }}>
					{!delay && (
						<TypeWriter
							key={selectedLanguage}
							text={t("aboutMyself")}
							delay={45}
						/>
					)}
				</span>
			</InfoContent>
			<ImgContainer>
				<Image
					ref={myRef}
					src={process.env.PUBLIC_URL + "/img/Myself.png"}
					className={isVisible ? "show-up" : "hidden"}
				/>
			</ImgContainer>
		</Container>
	);
};

export default Content;
