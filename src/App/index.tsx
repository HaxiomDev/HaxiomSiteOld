import "./app.css";

import { Route, Routes } from "react-router-dom";
import HomeRoute from "../routes/HomeRoute";
import ErrorRoute from "../routes/404Route";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<ErrorRoute />} />
        <Route path="/" element={<HomeRoute />} />
      </Routes>
    </div>
  );
}
