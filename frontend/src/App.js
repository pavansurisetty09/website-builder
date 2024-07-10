import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchConfig } from "./redux/configSlice";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.config);

  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
