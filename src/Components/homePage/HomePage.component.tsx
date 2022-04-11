import React, { FunctionComponent } from "react"
import { Link, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Todolist from "../todolist/Todolist.component"
//import "./page.scss"


const styles = makeStyles({
	root: {
		minHeight: '100%',
	},
	container: {
		margin: '25vh auto',
		padding: '2% 0',
		width: '50%',
		borderRadius: '15px',
		boxShadow: '0 0 5px 2px grey',
	},
	link: {
		fontSize: '18px',
		marginLeft: '5px',
	}
})

const HomePage: FunctionComponent = () =>
{
	const classes = styles()

	return (
		<section className={ classes.root }>
			<Grid container justifyContent="center" alignItems="center" className={ classes.container }>
				<Todolist />
			</Grid>
		</section>
	)
}

export default HomePage
