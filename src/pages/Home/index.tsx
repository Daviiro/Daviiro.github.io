import React from "react";
import Header from "../../components/Header";
import Content from "../../components/Content";
import About from "../../components/About";
import Footer from "../../components/Footer";
import { Container } from "./styles";
import Projects from "../../components/Projects";

const Home: React.FC = () => {
	return (
		<Container>
			<Header />
			<Content />
			<About />
			<Projects />
			<Footer />
		</Container>
	);
};

export default Home;
