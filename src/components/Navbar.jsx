import { useEffect, useState } from "react"

export default function Navbar({initialPosts, setPosts}  ) {
    const categories = ["Политика","Экономика","Общество","Спорт"]


    const filterNews = (category) => {
        setPosts(initialPosts.filter(post => post.category == category))
    }

    const [value , setValue] = useState("")

    useEffect(()=>{
    setPosts(initialPosts.filter(post => post.title.toLowerCase().includes(value.toLowerCase())))
    }, [value])
    return(
        <nav className="navbar is-info">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <h1 className="title has-text-white">Posts</h1>
                </div>
            </div>


            <div className="navbar-end">
                <a className="navbar-item" onClick={() => setPosts(initialPosts)} >Всё посты</a>
                {categories.map(category=>(
                    <a className="navbar-item" onClick={() => filterNews(category)} key={category}>{category}</a> 
                ))}
                <input type="text"
                className="input is-info is-rounded mt-1 mr-1"
                placeholder="search"
                onInput={(e)=> setValue(e.target.value)} 
                />
            </div>
        </nav>

    )
}