import { useQuery } from "react-query"
import ApiClient from "../utils/ApiClient"
import { ITodo } from "../utils/Types"
import TodoCard from "../TodoCard/TodoCard"
import AddTodo from "../AddTodo/AddTodo"

export default function Demo () {
	const { data: todos, isLoading,  } = useQuery({
		queryKey: ["todos"],
		queryFn: ApiClient.fetchTodos,
		// cacheTime: 0,
		// staleTime: 0,
		// refetchOnMount: false,
		// refetchOnReconnect: false,
		// refetchOnWindowFocus: false,
	})
	if (isLoading) return <h1>Loading...</h1>
	return (
		<div>
			<AddTodo />
			
			<h1>Current Todos</h1>
			{todos?.map((todo: ITodo) => (
				<TodoCard key={todo.id} todo={todo}/>
			))}
		</div>
	)
}