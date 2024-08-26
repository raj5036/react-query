import React from "react"
import { ITodo } from "../utils/Types"

type Props = {
	todo: ITodo
}

const TodoCard: React.FC<Props> = ({ todo }) => {
	return (
		<div>
			<p>{todo.title}</p>
		</div>
	)
}

export default TodoCard