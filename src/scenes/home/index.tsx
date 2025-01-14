import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import FootyPhoto from "@/assets/FootyPhoto-1.png";
import Name from "@/assets/name.png";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import Welcome from "@/assets/WelcomeToWebsite.png"


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
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
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={Welcome} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Gday, my name is Billy Sengupta and im a 21 year old who lives in Sydney.
              I'm currently studying Advanced Computing and Commerce at Usyd.
              I love to spend time watching sport my dad, at the beach with my mates and golfing with my brothers.
              I hope you find this page interesting/useful. Below is myself(left) and my younger brother (right) before an AFL game last year.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton 
            setSelectedPage={setSelectedPage}>
              
              Learn More
            </ActionButton>


            <AnchorLink
              className="text-sm rounded-lg font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
      
        {/* <text >Me and my brother Xavier</text> */}
        <div
        className="flex basis-3/5 justify-center md:z-10
            md:ml-40 md:mt-16 md:justify-items-end"
      >

          <img alt="home-pageGraphic" src={FootyPhoto} />
        </div>
      </motion.div>


    </section>
  );
};

export default Home;