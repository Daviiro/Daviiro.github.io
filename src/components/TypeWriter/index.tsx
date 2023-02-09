import React, { useState, useEffect, useRef } from "react";
import { TypeWriterInterface } from "./types";

const TypeWriter: React.FC<TypeWriterInterface> = (props) => {
	const index = useRef(0);
	const [currentText, setCurrentText] = useState("");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setCurrentText((value) => value + props.text.charAt(index.current));
			index.current += 1;
		}, props.delay);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [currentText, props.text]);

	return <>{currentText}</>;
};

export default TypeWriter;
