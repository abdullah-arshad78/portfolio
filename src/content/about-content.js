import {
  FaReact,
  FaGitAlt,
  FaSass,
  FaStripeS,
  FaNodeJs,
  FaBookReader,
  FaRunning,
  FaPodcast,
  FaHiking,
} from "react-icons/fa";
import {
  SiRedux,
  SiJavascript,
  SiTailwindcss,
  SiCss3,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { MdSportsCricket } from "react-icons/md";
import { CgGym } from "react-icons/cg";

//About Content
export const aboutContent = {
  bio: "I am a Frontend React Developer who loves to build advanced web apps with astounding UIs. I aim to use advanced technologies with the latest versions to give users a satisfying, futuristic experience. I build web apps for multiple categories, ranging from small portfolio projects to enormous enterprise-level applications. I keep polishing, upgrading and refining my skills by consistently making unique web apps that enable me to find the best approaches for a particular problem.",
};

const primaryIconClass =
  "w-[6rem] h-[6rem]  md:w-[8rem] md:h-[8rem] bulge-item";

const alsoUsedIconClass = "w-[5rem] h-[5rem] bulge-item";

const interestIconClasses =
  "w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] bulge-item";

export const primaryIconContent = [
  {
    icon: <FaReact className={primaryIconClass + "  fill-[#61dbf8]"} />,
    name: "React",
  },
  {
    icon: <SiRedux className={primaryIconClass + " fill-[#764abc]"} />,
    name: "Redux",
  },
  {
    icon: (
      <SiJavascript
        className={primaryIconClass + " bg-[#323330]   fill-[#f0db4f]"}
      />
    ),
    name: "JavaScript",
  },
  {
    icon: <SiTailwindcss className={primaryIconClass + " fill-cyan-400"} />,
    name: "Tailwind CSS",
  },
  {
    icon: (
      <BsFillBootstrapFill className={primaryIconClass + " fill-[#563d7c]"} />
    ),
    name: "Bootstrap 5",
  },
  {
    icon: <FaSass className={primaryIconClass + " fill-[#cc6699]"} />,
    name: "SASS",
  },
  {
    icon: <AiFillHtml5 className={primaryIconClass + " fill-[#e34c26]"} />,
    name: "HTML5",
  },
  {
    icon: (
      <SiCss3 className="w-[5rem] h-[5rem]  md:w-[7rem] md:h-[7rem] bulge-item  fill-[#264de4]" />
    ),
    name: "CSS3",
  },
  {
    icon: <FaGitAlt className={primaryIconClass + " fill-[#f1502f]"} />,
    name: "Git & GitHub",
  },
];

export const alsoUsedIconContent = [
  {
    icon: <FaNodeJs className={alsoUsedIconClass + " fill-[#68ad4d]"} />,
    name: "Node.js",
  },
  {
    icon: <SiExpress className={alsoUsedIconClass + " fill-zinc-700"} />,
    name: "Express.js",
  },
  {
    icon: <SiMongodb className={alsoUsedIconClass + " fill-[#3FA037]"} />,
    name: "MongoDB",
  },
  {
    icon: <FaStripeS className={alsoUsedIconClass + " fill-[#5433ff]"} />,
    name: "Stripe",
  },
];

export const interestIconContent = [
  {
    icon: (
      <MdSportsCricket className={interestIconClasses + " fill-[#e6ba5d]"} />
    ),
    name: "Cricket",
  },
  {
    icon: <FaBookReader className={interestIconClasses + " fill-[#624a80]"} />,
    name: "Reading",
  },
  {
    icon: <FaRunning className={interestIconClasses + " fill-[#c16a7e]"} />,
    name: "Running",
  },
  {
    icon: <CgGym className={interestIconClasses + " fill-[#5859ab]"} />,
    name: "Working Out",
  },
  {
    icon: <FaPodcast className={interestIconClasses + " fill-[#4da750]"} />,
    name: "Podcasts",
  },
  {
    icon: <FaHiking className={interestIconClasses + " fill-[#30748d]"} />,
    name: "Hiking",
  },
];
