import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BtnScrollToUp from "../components/BtnScrollToUp";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
        <BtnScrollToUp />
      </main>
      <Footer />
    </>
  );
}
