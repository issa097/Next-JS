import { promises } from "dns"
import { resolve } from "path"

export default async function PostDetalis({ ID }) {
    console.log("first", ID)
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000);
    })
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`)
    const post = await response.json()
    console.log(post)

    return (
        <arguments className="flex flex-col items-center justify-center gap-1  ">

            <div> Page Detals</div>

            <div className="w-[50rem] rounded-lg bg-blue-900">


                <div>UserID:{post.userId}</div>
                <div>ID:{post.id}</div>
                <div>Title:{post.title}</div>
                <div>Body:{post.body}</div>
            </div>

        </arguments>
    )
}