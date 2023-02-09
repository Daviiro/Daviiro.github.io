import React from "react";
import { WrapperS, Row } from "./styles";
import { WrapperI } from "./types";

const Wrapper: React.FC<WrapperI> = (props) => {
	return (
		<WrapperS>
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
