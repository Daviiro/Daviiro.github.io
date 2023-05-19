import React from "react";
import { WrapperS, ImgS } from "./styles";
import { useInView } from "react-intersection-observer";
import { WrapperI } from "./types";

const Wrapper: React.FC<WrapperI> = ({ delay, title, text, imgs }) => {
	const { ref: myRef, inView: isVisible } = useInView();
	return (
		<WrapperS
			ref={myRef}
			className={isVisible ? "show-up" : "hidden"}
			transitionDelay={delay}
		>
			<p>{title}</p>
			{imgs?.map((img) => (
				<ImgS src={process.env.PUBLIC_URL + img.src} alt={img.alt} />
			))}

			<hr />
			<p>{text}</p>
		</WrapperS>
	);
};

export default Wrapper;
