import { promises } from "dns"
import { resolve } from "path"
import PostDetalis from "../../componants/postDetalis.jsx"
import { Suspense } from "react"
import Loding from "../../componants/loading.jsx"
export default async function postDetalspage({ params }) {
    const ID = params.id



    return (
        <arguments className="flex flex-col items-center justify-center gap-1  ">

            <div> Page Detals</div>
            <Suspense fallback={<Loding />}>
                <div className="w-[50rem] rounded-lg bg-blue-900">
                    <PostDetalis ID={ID} />
                </div>
            </Suspense>
        </arguments>
    )
}