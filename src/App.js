import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Repos, SharedLayouts } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route index={true} element={<Repos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
