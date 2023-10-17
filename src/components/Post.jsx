export default function Post({post}) {
    return(
        <div className="column is-4">
            <div className="card">
                <div className="card-image">
                    <div className="image is-4by3">
                        <img src={post.thumb}
                            alt="" />
                    </div>
                </div>
                <div className="card-content">
                    <div className="has-text-centered">
                        <h1 className="heading is-size-6 ">{post.category}</h1>
                        <span className="tag is-info is-light">{post.author}</span>
                    </div>
                    <br />
                    <h1 className="title is-5">{post.title}</h1>
                    <p>{post.body}</p>
                    <br /><br />
                    <div className="columns is-justify-content-space-between has-text-grey is-vcentered px-4">
                        <span>{post.createdAt}</span>   
                        <span className="columns is-vcentered"><i className="fa-regular fa-eye ml-2 mr-1"></i> {post.views}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

