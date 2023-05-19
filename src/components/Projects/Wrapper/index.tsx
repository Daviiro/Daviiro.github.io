import React from "react";
import { WrapperS, ImgS } from "./styles";
import { useInView } from "react-intersection-observer";
import { WrapperI } from "./types";

const Wrapper: React.FC<WrapperI> = ({ delay, title, text, imgs, link }) => {
	const { ref: myRef, inView: isVisible } = useInView();
	return (
		<a style={{ textDecoration: "none", color: "white" }} href={link}>
			<WrapperS
				ref={myRef}
				className={isVisible ? "show-up" : "hidden"}
				transitionDelay={delay}
			>
				<h5>{title}</h5>
				{imgs?.map((img) => (
					<ImgS
						src={process.env.PUBLIC_URL + img.src}
						alt={img.alt}
					/>
				))}

				<hr />
				<p>{text}</p>
			</WrapperS>
		</a>
	);
};

export default Wrapper;
