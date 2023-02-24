import "./app.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeRoute from "../routes/HomeRoute";
import ErrorRoute from "../routes/404Route";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="*" element={<ErrorRoute />} />
          <Route path="/" element={<HomeRoute />} />
        </Routes>
      </Router>
    </div>
  );
}
