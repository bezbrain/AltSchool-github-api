import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage, RepoPage, SharedLayouts, SingleRepoDesc } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route index element={<RepoPage />} />
          <Route path="/:repoId" element={<SingleRepoDesc />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
