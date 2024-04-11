import { motion } from "framer-motion";
import Navbar2 from "@/scenes/navbar2";

import HText from "@/shared/HText";

import imports from "@/assets/StockSelection/imports.png";
import wiki from "@/assets/StockSelection/wikipediarequest.png";
import financials from "@/assets/StockSelection/businessfinancials.png";
import groupdata from "@/assets/StockSelection/groupdata.png";
import rankfilter from "@/assets/StockSelection/rankfilter.png";
import writeexcel from "@/assets/StockSelection/writeexcel.png";

const StockSelection = () => { 


    return(
        <section id="stockselection" className=" bg-gray-20 py-10 md:pb-0">
        
        
        {/* IMAGE AND MAIN HEADER */}
        <motion.div
        className="mx-auto w-5/6 items-center md:flex md:h-5/6"
      >

          {/* MAIN HEADER */}
          <div className="z-10 mt-32 md:basis-4/5">
            {/* HEADINGS */}
            <motion.div
              className="md:-mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className = "mt-20 justify-center">

              
                  <HText>
                    Using ML to Predict {" "} For Each Year
                    <span className="text-primary-500"> NBA ALL STARS</span>
                  </HText>
                </div>
                  <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className = "text-lg font-bold pb-3 pt-2">Part 1 - Importing R Libraries</h1>


              <p className="pb-2 justify-center">

                In addition to <strong>pandas</strong>, you will need to import <strong>yahoo finance</strong>.

                </p>
                {/* <div className="flex basis-3/5 justify-center md:z-10">
          <img alt="imports" src={imports} />
          </div> */}

                <h1 className = "text-lg font-bold pb-3 pt-2 ">Part 2 - Retrieve Stock Tickers From Wikipedia</h1>
                <p className="mb-2 justify-center">
                Using pandas we can make a request to wikipedia and scrape information from the Nasdaq-100 webpage. 
                This allows us to index the data by <strong>Ticker</strong> and convert it to a list which we can use in the next step to gather
                their financial information.

                </p>
                <div className="flex basis-3/5 justify-center md:z-10">
          <img alt="wikipedia-request" src={wiki} />
          </div>
              <h1 className = "text-lg font-bold pb-3 pt-2">Part 3 - Retrieve Financial Information </h1>
             
              <p className="mb-2 justify-center">
                Using yahoo finance we can loop through our list of tickers and retrieve the company's financial information.
                We continually append this to our dataframe list before concatenating them using pandas. When assessing financial ratios
                it is important to compare across similar businesses. In this case, i grouped the dataframe by <strong>sectorDisp</strong> to achieve this.


              </p>
              <div className="flex basis-3/5 justify-center md:z-10">
          <img alt="financials-image" src={financials} />
          </div>

              <h1 className = "text-lg font-bold pb-3 pt-2">Part 4 - Prepare Data </h1>
             
              <p className="mb-2 justify-center">
               We then need to subset the data once more and retrieve the information from each sector before parseing it into our <strong>rank and filter function</strong>
             </p>

             <div className="flex basis-3/5 justify-center md:z-10">
          <img alt="datagroupedcode" src={groupdata} />
          </div>

             <h1 className = "text-lg font-bold pb-3 pt-2">Part 5 - Rank and Filter Data </h1>
             
             <p className="mb-2 justify-center">
               Our rank and filter function retrieves the financial ratios of the businesses and ranks them
               against their industry competitors. We use the <strong>"ascending = True"</strong> tag for the PE and pegRatio
               as lower PE and peg suggets growth potential. Conversely, as a shareholder you would like a business to be making
               high returns on the equity you provide them, consequently we use the <strong>"ascending = False"</strong> tag.
             </p>

             <p className="mb-2">
              Our next step is to sum the ranks of these financial ratios into a combined rank and filter out 
              other data before returning the dataframe sorted by the combined rank column.
             </p>
             <div className="flex basis-3/5 justify-center md:z-10">
          <img alt="home-pageGraphic" src={rankfilter} />
          </div>

             <h1 className = "text-lg font-bold pb-3 pt-2">Part 6 - Write Information to Excel </h1>
             
             <p className="mb-2 justify-center">
               Lastly, if you would like to view these results in excel you write your dataframe to excel using the below code.
             </p>
             <div className="flex basis-3/5 justify-center">
                <img alt="write-to-excel" src={writeexcel} />
            </div>
    
            </motion.div>
            </motion.div>
            
          </div>
          </motion.div>
  
      </section>


);
};

export default StockSelection