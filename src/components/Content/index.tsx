import React, { useState, useEffect } from "react";
import { Container, ImgContainer, Image, InfoContent } from "./styles";
import TypeWriter from "../TypeWriter";
import { useInView } from "react-intersection-observer";

const Content: React.FC = () => {
	const [delay, setDelay] = useState(true);
	const { ref: myRef, inView: isVisible } = useInView({ triggerOnce: true });

	useEffect(() => {
		setTimeout(() => {
			setDelay(false);
		}, 650);
	}, []);

	return (
		<Container>
			<InfoContent>
				<h2 className="text" style={{ padding: "12px" }}>
					<TypeWriter text="Olá!" delay={100} />
				</h2>
				<span style={{ padding: "12px" }}>
					{!delay && (
						<TypeWriter
							text={
								"Sou David Jr. Rodrigues, um graduado em Ciência da Computação pela UNESP - Câmpus de Presidente Prudente -  e também um desenvolvedor WEB."
							}
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
