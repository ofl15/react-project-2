export default function Navbar({initialPosts, setPosts}  ) {
    const categories = ["Политика","Экономика","Общество","Спорт"]


    const filterNews = (category) => {
        setPosts(initialPosts.filter(post => post.category == category))
    }

    return(
        <nav className="navbar is-info">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <h1 className="title has-text-white">Posts</h1>
                </div>
            </div>


            <div className="navbar-end">
                <a className="navbar-item">Всё посты</a>
                {categories.map(category=>(
                    <a className="navbar-item" onClick={() => filterNews(category)} key={category}>{category}</a> 
                ))}
            </div>
        </nav>

    )
}