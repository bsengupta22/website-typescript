import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { SelectedPage } from "@/shared/types";
import { useMediaQuery } from "@mui/material";
import Name from "@/assets/name.png";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}


const Navbar2 = () => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    
    return (
   <nav>
        <div className = {`${flexBetween} mx-auto w-5/6`}>
            <div className = {`${flexBetween} w-1/5 gap-16`}>
                {/* LEFT SIDE */}
                <img alt = "name" src = {Name} />

                {/* RIGHT SIDE */}
                {isAboveMediumScreens ? (
                <div className = {`${flexBetween} w-full`}>
                    <div className = {`${flexBetween} gap-8 text-sm`}>
                    <Link to="/home" className="btn btn-primary">Return Home</Link>
   
                </div>

                </div> 
                    ) : (
                        <button
                            className = "rounded-full bg-secondary-500 p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className = "h-6 w-6 text-white"/>
                        </button>
                    )}
            </div>
        </div>

    {/* Mobile Menu Modal */}
    {!isAboveMediumScreens && isMenuToggled && (
        <div className = "fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            {/* Close Icon */}
            <div className = "flex justify-end p-12"> 
                <button onClick={() => setIsMenuToggled(!isMenuToggled)} >
                    <XMarkIcon className = "h-6 w-6 text-gray-400" />

                </button>
            </div>
        {/* Menu Items */}
        <div className = "ml-[33%] flex flex-col gap-10 text-2xl">
        <Link to="" className="btn btn-primary">Return Home</Link>

        </div>

        </div>

    )}
    </nav>
  )
}

export default Navbar2