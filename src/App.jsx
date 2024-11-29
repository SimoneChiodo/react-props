import { useState } from "react";

// Components
import Header from "./Header";
import Post from "./components/Post";
import Footer from "./Footer";
import { posts } from "./data/posts";
import ChooseTagColor from "./ChooseTagColor";

// Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Custom CSS
import "./App.css";
import "./index.css";

function App() {
    const [count, setCount] = useState(0);

    let tags = [];
    posts.map((post) =>
        post.tags.map((tag) => {
            if (!tags.includes(tag)) tags.push(tag);
        })
    );

    return (
        <>
            <div className="wrapper d-flex flex-column">
                <Header />
                <main>
                    <section id="post-list">
                        <div className="row mb-5">
                            {posts
                                .filter((post) => post.published === true)
                                .map((post) => (
                                    <div
                                        key={"post-" + post.id}
                                        className="col-6 mt-5 d-flex justify-content-center"
                                    >
                                        <Post
                                            img={post.image}
                                            title={post.title}
                                            description={post.content}
                                            buttons={post.tags}
                                        />
                                    </div>
                                ))}
                        </div>
                    </section>

                    <section id="tag-list">
                        <h2 className="py-3 px-5 fs-1">Elenco tags:</h2>
                        <div className="tags-container px-5">
                            {tags.map((tag) => (
                                <>
                                    {" "}
                                    <p
                                        key={"tag-" + tag}
                                        className={
                                            "object-fit-contain btn " +
                                            ChooseTagColor(tag)
                                        }
                                    >
                                        {tag}
                                    </p>
                                    <br />
                                </>
                            ))}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
