// code written for all entry points/pages
import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/home";
import Project from "./scenes/portfolio";

import Contact from "./scenes/contact";



// Enums restrict pages to only be able to access these


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);


  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !==0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll)
    return() => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <div className="app bg-gray-20">
        <Navbar
        isTopOfPage = {isTopOfPage}
        selectedPage= {selectedPage} setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage = {setSelectedPage}/>
        <Project setSelectedPage={setSelectedPage} />
        <Contact setSelectedPage={setSelectedPage} />
      </div>
  )
}

export default App;
