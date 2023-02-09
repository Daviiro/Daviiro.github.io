import React from "react";
import { Container, CenterItems, Row } from "./styles";
import Wrapper from "./Wrapper";
import TypeWriter from "../TypeWriter";

const About: React.FC = () => {
	return (
		<Container>
			<CenterItems>
				<h2 className="text">
					<TypeWriter
						text="Tecnologias em que tenho certo conhecimento:"
						delay={45}
					/>
				</h2>
				<Row>
					<Wrapper
						img="/img/C-icon.png"
						title=" Linguagem C"
						text="É a linguagem com qual aprendi a programar."
					></Wrapper>
					<Wrapper
						img="/img/react-icon.png"
						title="ReactJs"
						text="É a biblioteca com que mais tenho familiaridade até o momento no que diz respeito a desenvolvimento web."
					></Wrapper>
				</Row>
				<Row>
					<Wrapper
						img="/img/js-icon.png"
						title="JavaScript"
						text="Linguagem com que aprendi a fazer um site, ela proporciona um grande leque de possibilidades devidos aos seus diversos tipos de bibliotecas e frameworks."
					></Wrapper>
					<Wrapper
						img="/img/node-icon.png"
						title="Node.js"
						text="Node.js me proporcionou o primeiro contato com o back-end. Estou longe de o dominar no momento, mas tenho o objetivo de melhorar."
					></Wrapper>
				</Row>
				<Row>
					<Wrapper
						img="/img/ts-icon.png"
						title="TypeScript"
						text="É a linguagem com qual estou me habituando cada vez mais. Este site, por exemplo, foi escrito usando React e TypeScript."
					></Wrapper>
					<Wrapper
						img="/img/git-icon.png"
						title="Git"
						text="É o sistema de controle de versão que utilizo em todo projeto que faço."
					></Wrapper>
				</Row>
			</CenterItems>
		</Container>
	);
};

export default About;
