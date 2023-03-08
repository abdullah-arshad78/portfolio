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
  "w-[6rem] h-[6rem]  md:w-[8rem] md:h-[8rem] bulge-item drop-shadow-dark";

const alsoUsedIconClass = "w-[5rem] h-[5rem] bulge-item drop-shadow-dark";

const interestIconClasses =
  "w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] bulge-item drop-shadow-dark";

export const primaryIconContent = [
  {
    id: "pc1",
    icon: <FaReact className={primaryIconClass + "  fill-[#61dbf8]"} />,
    name: "React",
  },
  {
    id: "pc2",
    icon: <SiRedux className={primaryIconClass + " fill-[#764abc]"} />,
    name: "Redux",
  },
  {
    id: "pc3",
    icon: (
      <SiJavascript
        className={primaryIconClass + " bg-[#323330]   fill-[#f0db4f]"}
      />
    ),
    name: "JavaScript",
  },
  {
    id: "pc4",
    icon: <SiTailwindcss className={primaryIconClass + " fill-cyan-400"} />,
    name: "Tailwind CSS",
  },
  {
    id: "pc5",
    icon: (
      <BsFillBootstrapFill className={primaryIconClass + " fill-[#563d7c]"} />
    ),
    name: "Bootstrap 5",
  },
  {
    id: "pc6",
    icon: <FaSass className={primaryIconClass + " fill-[#cc6699]"} />,
    name: "SASS",
  },
  {
    id: "pc7",
    icon: <AiFillHtml5 className={primaryIconClass + " fill-[#e34c26]"} />,
    name: "HTML5",
  },
  {
    id: "pc8",
    icon: (
      <SiCss3 className="w-[5rem] h-[5rem]  md:w-[7rem] md:h-[7rem] bulge-item drop-shadow-dark  fill-[#264de4]" />
    ),
    name: "CSS3",
  },
  {
    id: "pc9",
    icon: <FaGitAlt className={primaryIconClass + " fill-[#f1502f]"} />,
    name: "Git & GitHub",
  },
];

export const alsoUsedIconContent = [
  {
    id: "au1",
    icon: <FaNodeJs className={alsoUsedIconClass + " fill-[#68ad4d]"} />,
    name: "Node.js",
  },
  {
    id: "au2",
    icon: <SiExpress className={alsoUsedIconClass + " fill-zinc-700"} />,
    name: "Express.js",
  },
  {
    id: "au3",
    icon: <SiMongodb className={alsoUsedIconClass + " fill-[#3FA037]"} />,
    name: "MongoDB",
  },
  {
    id: "au4",
    icon: <FaStripeS className={alsoUsedIconClass + " fill-[#5433ff]"} />,
    name: "Stripe",
  },
];

export const interestIconContent = [
  {
    id: "i1",
    icon: (
      <MdSportsCricket className={interestIconClasses + " fill-[#e6ba5d]"} />
    ),
    name: "Cricket",
  },
  {
    id: "i2",
    icon: <FaBookReader className={interestIconClasses + " fill-[#624a80]"} />,
    name: "Reading",
  },
  {
    id: "i3",
    icon: <FaRunning className={interestIconClasses + " fill-[#c16a7e]"} />,
    name: "Running",
  },
  {
    id: "i4",
    icon: <CgGym className={interestIconClasses + " fill-[#5859ab]"} />,
    name: "Working Out",
  },
  {
    id: "i5",
    icon: <FaPodcast className={interestIconClasses + " fill-[#4da750]"} />,
    name: "Podcasts",
  },
  {
    id: "i6",
    icon: <FaHiking className={interestIconClasses + " fill-[#30748d]"} />,
    name: "Hiking",
  },
];
