// App.js
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    let timeout;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.top = y + "px";
      cursor.style.left = x + "px";
      cursor.style.display = "block";

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cursor.style.display = "none";
      }, 800);
    };

    const handleMouseOut = () => {
      cursor.style.display = "none";
    };

    const toggleBtn = document.querySelector(".menu");
    const cross = document.querySelector(".cross");
    const menu = document.querySelector(".nav-links");
    const body = document.querySelector("body");
    const abtSection = document.querySelectorAll(".ContainerHidder");
    const inputs = document.querySelectorAll("input");

    const callMenu = () => {
      const isMenuOpen = menu.getAttribute("id") === "flex";

      if (!isMenuOpen) {
        menu.setAttribute("id", "flex");
        toggleBtn.style.display = "none";
        cross.style.display = "block";
        body.setAttribute("id", "flex");
        abtSection.forEach((section) => (section.style.display = "none"));
      } else {
        menu.removeAttribute("id");
        toggleBtn.style.display = "block";
        cross.style.display = "none";
        body.removeAttribute("id");
        abtSection.forEach((section) => (section.style.display = "block"));
      }
    };

    toggleBtn?.addEventListener("click", callMenu);
    cross?.addEventListener("click", callMenu);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);

    const media = () => {
      const q = matchMedia("(orientation: portrait)");
      toggleBtn.style.display = q.matches ? "block" : "none";
    };

    window.onload = media;
    window.onresize = media;

    return () => {
      // Clean up on unmount
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Your React content here */}
      <div className="cursor"></div>
    </>
  );
}

export default App;
 