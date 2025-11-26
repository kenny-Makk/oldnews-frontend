import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import MakeDraft from "./pages/MakeDraft";
import Submit from "./pages/Submit";
import Submissions from "./pages/Submissions";
import Review from "./pages/Review";
import Published from "./pages/Published";
import Login from "./pages/Login";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/draft" element={<MakeDraft />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/review" element={<Review />} />
        <Route path="/published" element={<Published />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;