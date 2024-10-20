import { useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import "./app.css";

function App() {
    useEffect(() => {
        console.log("App loaded, checking for errors...");
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="App">
            {/* Wrap the Routes inside HashRouter */}
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/article/:slug" element={<ReadArticle />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

