import Post from "./Post";

export default function Posts({posts}) {
    return(
        <div className="container has-text-centered">
            <div className="columns is-multiline">
                {posts.map(post=>(
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}



