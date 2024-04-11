import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { ProjectType, SelectedPage } from "@/shared/types";
import {
  BanknotesIcon,
  StarIcon,
  ScaleIcon
} from "@heroicons/react/24/solid"; 
// Import Custom Icons from heroicons
import { motion } from "framer-motion";
import SixersLogo from "@/assets/76ersLogo.png";
import Project from "./Project";
import StockSelection from "./ProjectPages/StockSelection";
import AllStar from "./ProjectPages/AllStar"




const projects: Array<ProjectType> = [
  {
    icon: <BanknotesIcon className="h-6 w-6" />,
    title: "Ranking Nasdaq-100 Stocks",
    description:
      "An introduction to stock ranking using python",
    path: "/stockselection",
    element: StockSelection
  },
  {
    icon: <StarIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    path: "/allstar",
    element: AllStar
  },
  // {
  //   icon: <ScaleIcon className="h-6 w-6" />,
  //   title: "Expert and Pro Trainers",
  //   description:
  //     "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  // },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section id="projects" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>SOME OF MY RECENT PROJECTS.</HText>
          <p className="my-5 text-sm">
            Here are some of my recent projects... blah blah blah
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {projects.map((projects: ProjectType) => (
            <Project
              key={projects.title}
              icon={projects.icon}
              title={projects.title}
              description={projects.description}
              setSelectedPage={setSelectedPage}
              browserpath={projects.path}
              browserelement={projects.element}
            />
          ))}

        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="bacgkround-projects-page-graphic"
            src={SixersLogo}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    BACKGROUND BEHIND THESE {" "}
                    <span className="text-primary-500">PROJECTS</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
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
              <p className="my-5">

                Most of my projects are a reflection of my interests. Throughout university
                i have really enjoyed learning about finance - optimising portfolios, picking securities,
                trading derivatives etc. These interests combined with my studies in advanced computing have 
                enabled me to write a program that analyses the financial ratios of nasdaq-100 and output
                the top performers by industry. In future i would like to make a portfolio of these securities,
                optimise it and test out several strategies by backdating their returns.

                </p>
                <p className="mb-5">
                Conversely, away from univeristy i love playing and watching sport. Whilst i am yet to finalise
                this project, i would like to build a machine learning algorithm on R that attemps to predict
                the outcome of sporting events and create AFL/NBA Fantasy projections so i can win my tipping/fantasy competitions.
                As i have only won once in the 5 years i have been playing with my friends, this project is of high priority haha.

                </p>
 
             
              <p className="mb-5">
                Lastly, this website has been a project of mine. My university majors of data science and finance
                have minimal software engineering information and i have not learnt typescript at univesity. Whilst not
                as polished as a wix website, i thought it would be interesting to try and build a website using typescript 
                instead.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Contact Me With Any Questions 
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;