import { useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import ApiClient from "../utils/ApiClient"

const AddTodo = () => {
	const [title, setTitle] = useState<string>("")
	const [completed, setCompleted] = useState<boolean>(false)

	const queryClient = useQueryClient()

	const { mutateAsync: addTodoMutation } = useMutation({
		mutationFn: ApiClient.addTodo({ title }),
		onSuccess: () => {
			console.log("success")
			setTitle("")
			queryClient.invalidateQueries(["todos"])
		}
	})

	const onSubmit = async () => {
		console.log(title, completed)
		try {
			await addTodoMutation()
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div>
			<h1>Add Todo</h1>
			<input type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)}/>
			<input type="checkbox" name="completed" onChange={(e) => setCompleted(e.target.checked)}/>
			<button type="button" onClick={onSubmit}>Add Todo</button>
		</div>
	)
}

export default AddTodo