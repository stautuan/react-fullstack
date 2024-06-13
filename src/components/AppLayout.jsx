import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <Outlet className="h-full md:h-screen" />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
