import Header from "./matha";
import Navigation from "./navigation";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function layout() {
  return (
    <div className="app-layout">
      <Header />
      <Navigation />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default layout;
