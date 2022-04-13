import { Delete, Edit } from "@mui/icons-material";
import { Checkbox, Collapse, Grid, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FunctionComponent, useState } from "react";
import Anime from "react-anime";
import "./task.scss"

const useStyles = makeStyles({
	paper: {
		margin: "2.5% 0",
	},
})


const Task: FunctionComponent<{ name: string, id: string, deleteTask: any }> = ({ name, id, deleteTask }) => {

	const classes = useStyles()

	const [editMode, setEditMode] = useState<boolean>(false)
	const [taskName, setTaskName] = useState<string>(name)
	const [isChecked, setIsChecked] = useState<boolean>(false)
	const [tempName, setTempName] = useState<string>('')
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

	const renameTask = (newName: string) => {
		if (newName === '') newName = name
		setTaskName(newName)
		setEditMode(false)
	}
	const handleEnterKey = (event: React.KeyboardEvent<HTMLDivElement>, value: string) => { if (event.key === "Enter") renameTask(value) }
	const markToDelete = (id: string) => {
		setIsCollapsed(true)
		const deletionTimer = setTimeout(() => {
			deleteTask(id)
		}, 1500)
		clearTimeout(deletionTimer)
	}

	return (
		<Paper elevation={4} id="paper" className={classes.paper}>
			<Anime
				translateX="250"
				duration={400}
				direction="reverse"
				easing="easeInOutSine">
				<Collapse in={!isCollapsed}>
					<Grid container justifyContent="space-between" alignItems="center">
						<Grid container item width="max-content" alignItems="center">
							<Grid item>
								<Checkbox onChange={_ => setIsChecked(!isChecked)} />
							</Grid>
							<Grid item>
								{editMode ? (
									<TextField size="small" value={tempName} onChange={event => setTempName(event.target.value)} autoFocus placeholder={taskName} onKeyDown={event => handleEnterKey(event, tempName)} onBlur={event => renameTask(event.target.value)} />
								)
								: (
								<Typography component={isChecked ? "del" : 'p'}>{taskName}</Typography>
								)}
							</Grid>
						</Grid>
						<Grid alignItems="center">
							<Edit id="editIcon" fontSize="medium" onClick={_ => setEditMode(true)} color="primary" />
							<Delete id="deleteIcon" fontSize="medium" onClick={_ => markToDelete(id)} color="secondary" />
						</Grid>
					</Grid>
				</Collapse>
			</Anime>
		</Paper>
	)
}

export default Task
