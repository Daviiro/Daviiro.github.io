import React from "react";
import { WrapperS, Row } from "./styles";
import { WrapperI } from "./types";
import { useInView } from "react-intersection-observer";

const Wrapper: React.FC<WrapperI> = (props) => {
	const { ref: myRef, inView: isVisible } = useInView();
	const delay = props.delay;
	console.log("delay", delay);
	return (
		<WrapperS
			ref={myRef}
			className={isVisible ? "show-up" : "hidden"}
			transitionDelay={props?.delay}
		>
			<Row>
				<img
					src={process.env.PUBLIC_URL + props.img}
					alt={props.title}
					width="64px"
				/>
				<p>{props.title}</p>
			</Row>
			<hr />
			<p>{props.text}</p>
		</WrapperS>
	);
};

export default Wrapper;
