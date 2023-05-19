type IMG = {
	src: string;
	alt: string;
};

export interface WrapperI {
	imgs: IMG[];
	title: string;
	text: string;
	delay?: number;
	link: string;
}
