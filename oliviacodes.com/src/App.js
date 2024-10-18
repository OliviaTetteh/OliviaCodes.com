import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import "./app.css";

function App() {
    const [hasError, setHasError] = useState(false);
    const location = useLocation();

    useEffect(() => {
        console.log("App loaded, checking for errors...");
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setHasError(false); // Reset error state on route change
    }, [location]);

    const ErrorBoundary = ({ children }) => {
        try {
            return children;
        } catch (error) {
            console.error("Error caught in ErrorBoundary", error);
            setHasError(true);
            return <Notfound />;
        }
    };

    return (
        <div className="App">
            <ErrorBoundary>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/article/:slug" element={<ReadArticle />} />
                    <Route path="/contact" element={<Contact />} />
                    {hasError && <Route path="*" element={<Notfound />} />}
                </Routes>
            </ErrorBoundary>
        </div>
    );
}

export default App;
