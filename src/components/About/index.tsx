import React from "react";
import { Container, CenterItems, Row } from "./styles";
import Wrapper from "./Wrapper";
import TypeWriter from "../TypeWriter";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
	const { ref: myRef, inView: isVisible } = useInView({ triggerOnce: true });

	return (
		<Container>
			<CenterItems>
				<h2 className="text" ref={myRef}>
					{isVisible && (
						<TypeWriter
							text="Tecnologias em que tenho certo conhecimento:"
							delay={55}
						/>
					)}
				</h2>

				<Row>
					<Wrapper
						img="/img/C-icon.png"
						title=" Linguagem C"
						text="É a linguagem com qual aprendi a programar."
						delay={100}
					></Wrapper>
					<Wrapper
						img="/img/react-icon.png"
						title="ReactJs"
						text="É a biblioteca com que mais tenho familiaridade até o momento no que diz respeito a desenvolvimento web."
						delay={200}
					></Wrapper>
				</Row>
				<Row>
					<Wrapper
						img="/img/js-icon.png"
						title="JavaScript"
						text="Linguagem com que aprendi a fazer um site, ela proporciona um grande leque de possibilidades devidos aos seus diversos tipos de bibliotecas e frameworks."
						delay={150}
					></Wrapper>
					<Wrapper
						img="/img/node-icon.png"
						title="Node.js"
						text="Node.js me proporcionou o primeiro contato com o back-end. Estou longe de o dominar no momento, mas tenho o objetivo de melhorar."
						delay={250}
					></Wrapper>
				</Row>
				<Row>
					<Wrapper
						img="/img/ts-icon.png"
						title="TypeScript"
						text="É a linguagem com qual estou me habituando cada vez mais. Este site, por exemplo, foi escrito usando React e TypeScript."
						delay={200}
					></Wrapper>
					<Wrapper
						img="/img/git-icon.png"
						title="Git"
						text="É o sistema de controle de versão que utilizo em todo projeto que faço."
						delay={300}
					></Wrapper>
				</Row>
			</CenterItems>
		</Container>
	);
};

export default About;
