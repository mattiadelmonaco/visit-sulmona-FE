import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BtnScrollToUp from "../components/BtnScrollToUp";
import ScrollToTop from "../components/ScrollToTop";

export default function DefaultLayout() {
  return (
    <>
      {/* scroll to top per avere il tasto per tornare in alto in ogni pagina */}
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Outlet />
        <BtnScrollToUp />
      </main>
      <Footer />
    </>
  );
}
