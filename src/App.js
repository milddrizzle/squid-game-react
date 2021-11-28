import React, { useEffect } from "react";
import Details from "./components/Details";
import Episodes from "./components/Episodes";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Videos from "./components/Videos";
import scrollreveal from "scrollreveal";
function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        #hero,
        #info,
        #episodes,
        #details,
        #videos,
        footer
    `,
      {
        opacity: 0,
        interval: 500,
      }
    );
  }, []);
  return (
    <div>
      <Hero />
      <Info />
      <Episodes />
      <Videos />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
