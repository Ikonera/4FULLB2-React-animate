import { Button, Grid, TextField } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { v4 as uuidv4 } from "uuid"
import Task from "../task/Task.component";

const Todolist: FunctionComponent = () => {

	const [tasks, setTasks] = useState<{ name: string, id: string }[]>([])
	const [newTask, setNewTask] = useState<string>('')

	const createTask = () => {
		if (newTask === '') return
		setTasks([...tasks, { name: newTask, id: uuidv4()}])
		setNewTask('')
	}
	const handleEnterKey = (key: string) => {
		if (key === "Enter") createTask()
	}
	const handleDeleteTask = (id: string) => {
	console.log("Avant suppression de la tache")
		tasks.splice(tasks.findIndex(task => task.id === id), 1)
		setTasks([...tasks])
	}

	return (
		<Grid>
			<Grid container alignItems="center">
				<Grid item>
					<TextField variant="standard" name="newTaskName" value={newTask} placeholder="Nouvelle tache" autoFocus onChange={event => setNewTask(event.target.value)} onKeyDown={event => handleEnterKey(event.key) } />
				</Grid>
				<Grid item>
					<Button id="createTask" onClick={_ => createTask()}>Nouvelle tache</Button>
				</Grid>
			</Grid>
			{(tasks.length !== 0) && tasks.map((task: {name: string, id: string}) => (
				<Task name={task.name} id={task.id} key={task.id} deleteTask={handleDeleteTask} />
			))}
		</Grid>
	)
}

export default Todolist
