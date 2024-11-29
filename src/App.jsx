import { useState } from "react";

// Components
import Header from "./Header";
import Post from "./components/Post";
import Footer from "./Footer";

// Bootstrap CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// Custom CSS
import "./App.css";
import "./index.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <main>
                <div className="post-container m-3 d-flex justify-content-center">
                    <Post />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
