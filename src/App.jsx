import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import LandingPage from "./pages/Landing";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {/* The routes of the application */}
      <Routes>
        {/* The landing page */}
        <Route index path="/" element={<LandingPage />} />
        {/* The login page */}
        <Route index path="/login" element={<Login />} />
        {/* The home page */}
        <Route path="home" element={<Home />} />
        {/* The error page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
