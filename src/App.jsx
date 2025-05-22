import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import PoiPage from "./pages/PoiPage";
import SinglePoiPage from "./pages/SinglePoiPage";
import PoiWithTypePage from "./pages/PoiWithTypePage";
import PoiByMacroCategoryPage from "./pages/PoiByMacroCategoryPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="poi" element={<PoiPage />} />
          <Route path="single-poi/:id" element={<SinglePoiPage />} />
          <Route
            path="poi-by-type/type/:typeId"
            element={<PoiWithTypePage />}
          />
          <Route
            path="poi-by-macro-category/:macroCategory"
            element={<PoiByMacroCategoryPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
