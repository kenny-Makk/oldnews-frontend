import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

import Home from "./pages/Home";
import EditorInbox from "./pages/EditorInbox";
import MakeDraft from "./pages/MakeDraft";
import Submissions from "./pages/Submissions";
import Review from "./pages/Review";
import Published from "./pages/Published";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor-inbox" element={<EditorInbox />} />
        <Route path="/draft" element={<MakeDraft />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/review" element={<Review />} />
        <Route path="/published" element={<Published />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;