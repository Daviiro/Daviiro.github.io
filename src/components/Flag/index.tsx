import React from "react";

const Flag = ({
	image,
	isSelected,
	...props
}: {
	image: string;
	isSelected: boolean;
}) => (
	<img
		alt="flag"
		src={image}
		className={isSelected ? "flag selected" : "flag"}
		{...props}
	/>
);

export default Flag;
