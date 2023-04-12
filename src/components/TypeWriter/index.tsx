import React, { useState, useEffect, useRef } from "react";
import { TypeWriterInterface } from "./types";

const TypeWriter: React.FC<TypeWriterInterface> = ({ text, delay }) => {
	const index = useRef(0);
	const [currentText, setCurrentText] = useState("");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setCurrentText((value) => value + text.charAt(index.current));
			index.current += 1;
		}, delay);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [currentText, text, delay]);

	return <>{currentText}</>;
};

export default TypeWriter;
