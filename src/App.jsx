import { useState } from "react";

// Components
import Header from "./Header";
import Post from "./components/Post";
import Footer from "./Footer";
import { posts } from "./data/posts";

// Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Custom CSS
import "./App.css";
import "./index.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="wrapper d-flex flex-column">
                <Header />
                <main className="">
                    <div className="post-container m-3 d-flex justify-content-center">
                        {posts
                            .filter((post) => post.published === true)
                            .map((post) => (
                                <Post
                                    img={post.image}
                                    title={post.title}
                                    description={post.content}
                                    buttons={post.tags}
                                />
                            ))}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
