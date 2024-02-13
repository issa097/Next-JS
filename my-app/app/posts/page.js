
import Link from "next/link.js"
import Todo from "../componants/todo.jsx"

export default async function postspage() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const post = await response.json()
    console.log(post)
    const postJSX = post.map((posts) => {
        return (
            <Link href={`/posts/${posts.id}`} className="w-[50rem] bg-blue-900">
                <h1 className="bg-blue-500 ">{posts.title}</h1>
                <p className="bg-blue-500 ">{posts.body}</p>
            </Link>
        )

    })

    return (
        <div className="text-center">
            <h1>posts page</h1>


            <div className="flex flex-col items-center justify-center gap-5 rounded-lg ">
                {postJSX}

            </div>




            {/* <h1>{post.title}</h1> */}
            {/* <Todo /> */}
        </div >
    )
}