import Todolist from "./Todolist.component"
import React from "react"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe("Todolist component tests suit", () => {

	test("it should be mounted", () => {
		const wrapper = shallow(<Todolist />)
		expect(wrapper.find("[name='newTaskName']")).not.toBeNull()
	})

	test("it shouldn't create task when input value is empty", () => {
		const wrapper = shallow(<Todolist />)
		wrapper.find("[name='newTaskName']").simulate("click")
		expect(document.querySelector("checkbox")).toBeNull()
	})

})
