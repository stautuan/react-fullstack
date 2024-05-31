import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
