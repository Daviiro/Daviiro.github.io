import React, { useState, useEffect } from "react";
import { Container, ImgContainer, InfoContent } from "./styles";
import TypeWriter from "../TypeWriter";

const Content: React.FC = () => {
	const [delay, setDelay] = useState(true);

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
								"Sou David Jr. Rodrigues, um estudante de Ciências da Computação e também um desenvolvedor."
							}
							delay={45}
						/>
					)}
				</span>
			</InfoContent>
			<ImgContainer>
				<img
					className="Img"
					src={process.env.PUBLIC_URL + "/img/Myself.png"}
				/>
			</ImgContainer>
		</Container>
	);
};

export default Content;
