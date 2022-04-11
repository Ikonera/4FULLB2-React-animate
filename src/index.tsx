import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { CssBaseline } from "@mui/material"
import RouterOutlet from "./Components/routerOutlet/RouterOutlet.component"
import Header from "./Components/header/Header.component"

const App: FunctionComponent = () =>
{
    return (
		<>
			<CssBaseline />
			<Header />
			<RouterOutlet />
		</>
    )
}


ReactDOM.render(
	<Router>
		<App />
	</Router>,
    document.querySelector("#root")
)
