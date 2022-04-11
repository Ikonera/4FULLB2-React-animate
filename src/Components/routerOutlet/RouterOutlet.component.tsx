import React, { FunctionComponent } from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "../homePage/HomePage.component"

const RouterOutlet: FunctionComponent = () =>
{
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			{/* Put some routes here */}
		</Routes>
	)
}

export default RouterOutlet
