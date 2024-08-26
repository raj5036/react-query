import axios from "axios"
import { ITodo } from "./Types"

const ApiClient = {
	fetchTodos: () => {
		return Promise.resolve(
			axios.get("https://jsonplaceholder.typicode.com/todos")
		)
			.then((res) => res.data)
			.catch((err) => err)
	},
	addTodo: (todo: Pick<ITodo, "title">) => () => {
		return Promise.resolve(
			axios.post("https://jsonplaceholder.typicode.com/todos", todo)
		)
			.then((res) => res.data)
			.catch((err) => err)
	}
}

export default ApiClient