
import Todo from "../componants/todo.jsx"

export default async function postspage() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const todo = await response.json()
    console.log(todo)


    return (
        <div>
            <h1>posts page</h1>
            <h1>{todo.title}</h1>
            <Todo />
        </div >
    )
}