import Link from "next/link"

export default function articalspage() {
    return (
        <div>
            <h3>aricals page</h3>

            <Link href="/posts">
                <button className="bg-blue-200 rounded p-1 text-black">co to the posts page </button>
            </Link>
        </div>
    )
}