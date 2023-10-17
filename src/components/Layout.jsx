import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({children,initialPosts , setPosts}) {
    return(
        <>
        <Navbar/>
        <div className="section">
            {children}
        </div>
        <Footer/>
        </>
    )
}