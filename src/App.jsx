import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import PoiPage from "./pages/PoiPage";
import SinglePoiPage from "./pages/SinglePoiPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="poi" element={<PoiPage />} />
          <Route path="poi/:id" element={<SinglePoiPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
