import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HelloWorld from "components/HelloWorld";

const App: React.FC = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HelloWorld />} />
                <Route path="/:id" element={<HelloWorld />} />
            </Routes>
        </Suspense>
    </Router>
);

export default App;
