export default function showarticalspage(props) {
    console.log(props)
    return (
        <div>   <h1>show articals</h1>
            <h1>{props.params.title}</h1>
        </div>

    )
}