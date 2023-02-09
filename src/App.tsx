import React, { Component } from "react";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={dark}>
				<GlobalStyle />
				<Home />
			</ThemeProvider>
		);
	}
}

export default App;
