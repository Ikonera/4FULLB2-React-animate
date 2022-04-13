import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Task from "./Task.component"
import { v4 as uuid4 } from "uuid"
import React from "react"

configure({ adapter: new Adapter() })

describe("Task component test suit", () => {

	test("it should be mounted if state correctly set", () => {
		const deleteTask = jest.fn()
		const wrapper = shallow(<Task name="test1" id={uuid4()} deleteTask={deleteTask} />)
		expect(wrapper.find("checkbox")).not.toBeNull()
	})

})
