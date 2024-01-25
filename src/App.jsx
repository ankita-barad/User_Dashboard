import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Edit } from "./pages/Edit";
import { Create } from "./pages/Create";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:userId/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
