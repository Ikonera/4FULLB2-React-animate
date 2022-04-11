import { Delete, Edit } from "@mui/icons-material";
import { Checkbox, Grid, Paper, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FunctionComponent, useState } from "react";

const useStyles = makeStyles({
	paper: {
		margin: "2.5% 0",
	},
	icon: {
		cursor: "pointer"
	}
})

const Task: FunctionComponent<{ name: string, id: string, deleteTask: any }> = ({ name, id, deleteTask }) => {

	const classes = useStyles()

	const [editMode, setEditMode] = useState<boolean>(false)
	const [taskName, setTaskName] = useState<string>(name)
	const [isChecked, setIsChecked] = useState<boolean>(false)
	const [tempName, setTempName] = useState<string>('')

	const renameTask = (newName: string) => {
		if (newName === '') newName = name
		setTaskName(newName)
		setEditMode(false)
	}
	const handleEnterKey = (event: React.KeyboardEvent<HTMLDivElement>, value: string) => { if (event.key === "Enter") renameTask(value) }

	return (
		<Paper elevation={4} className={classes.paper}>
			<Grid container justifyContent="space-between" alignItems="center">
				<Grid container item width="max-content" alignItems="center">
					<Grid item>
						<Checkbox onChange={_ => setIsChecked(!isChecked)} />
					</Grid>
					<Grid item>
						{editMode ? (
							<TextField value={tempName} onChange={event => setTempName(event.target.value)} autoFocus placeholder={taskName} onKeyDown={event => handleEnterKey(event, tempName)} onBlur={event => renameTask(event.target.value)} />
						)
						: (
						<Typography component={isChecked ? "del" : 'p'}>{taskName}</Typography>
						)}
					</Grid>
				</Grid>
				<Grid alignItems="center">
					<Edit className={classes.icon} fontSize="small" onClick={_ => setEditMode(true)} color="primary" />
					<Delete className={classes.icon} fontSize="small" onClick={_ => deleteTask(id)} color="secondary" />
				</Grid>
			</Grid>
		</Paper>
	)
}

export default Task
