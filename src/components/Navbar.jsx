export default function Navbar() {
    const categories = ["Политика","Экономика","Общество","Спорт"]




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
                    <a className="navbar-item" key={category}>{category}</a> 
                ))}
            </div>
        </nav>

    )
}