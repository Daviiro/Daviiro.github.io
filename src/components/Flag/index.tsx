import React from "react";
import { StyledImage } from "./styles";

const Flag = ({
	image,
	isSelected,
	...props
}: {
	image: string;
	isSelected: boolean;
}) => (
	<StyledImage
		alt="flag"
		src={image}
		className={isSelected ? "selected" : ""}
		{...props}
	/>
);

export default Flag;
