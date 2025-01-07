import { Helper } from "./src/components/Helper";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import {
  IoCodeOutline,
  IoCodeSlashOutline,
  IoColorWandOutline,
  IoEarthOutline,
  IoLayersOutline,
  IoLeafOutline,
  IoLogoFigma,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoReact,
  IoServerOutline,
  IoTriangleOutline,
} from "react-icons/io5";

// <head> tag info

export const head = {
  title: "nudlツ portfolio",
  description: `Hello! My name is Zanyar, I build robust scalable systems, and live off eating instant ramen 🍜.`,
  keywords: "zany-ar",
  url: "https://nudl.tech",
  image: "https://nudl.tech/screenshot.png",
  googleAnalytics: "G-HL0YCRR2PD",
};

// portfolio info
// {
//   email,
//   intro,
//   social,
//   aboutMe,
//   recentTechnologies,
//   projects,
//   sideProjects
// }

export const email = "zanyar@nudl.tech";

export const intro = {
  name: "Zanyar Jamal",
  moto: "Software Engineer",
  text: (
    <>
      I'm a software engineer who likes to build digital products and services,
      alias{" "}
      <NextLink href={"https://github.com/zany-ar/"} passHref>
        <Link fontWeight={"600"} textDecoration={"underline"}>
          nudlツ
        </Link>
      </NextLink>
      . If you want to partner up on a project or just want to talk:
    </>
  ),
};

export const social = {
  github: "https://github.com/zany-ar/",
  youtube: "https://www.youtube.com/@zanyar-su",
  // twitter: "https://x.com/username",
};

export const aboutMe = (
  <>
    Hello! My name is <Helper>Zanyar</Helper>, I build web applications,
    distributed systems, and live off eating instant ramen 🍜.
    <br />
    <br />I love working with the <Helper>latest technologies</Helper>, and have
    even become a jack of all trades. working with <Helper>AI models</Helper>,
    to experience with Game Engines and Web Development
    <br />
    <br />I have professional experience in <Helper>System Design</Helper>,{" "}
    <Helper>Legacy System Modernization</Helper>,{" "}
    <Helper>Full Stack Web Development</Helper>.
    <br />
    <br />
    Here are a few technologies I’ve been working with recently:
  </>
);

export const recentTechnologies = ["Next.js", "Zustand", "Three.js", "Redis"];

export const projects = [
  {
    title: "WickdLab",
    description: `Web Based 2.5D AI Animation Studio`,
    link: "https://wickdlab.com",
    techstack: ["R3F - Three.js", "Zustand", "Next.js", "DrizzleORM"],
    imgsrc: "/images/wickdlab.png",
    youtube: "https://www.youtube.com/watch?v=eaaJA4JhhG8",
  },
  {
    title: "Pentesting Jobs",
    description: `A job board for cyber-security experts, find / post jobs.`,
    link: "https://pentestingjobs.co",
    github: "https://github.com/zany-ar/pentesting-jobs",
    techstack: ["TypeScript", "Next.js", "MongoDB", "Material-UI"],
    imgsrc: "/images/pentesting_jobs.png",
  },
  {
    title: "Nudolio",
    description: `Open source software license key manager built with MERN & redux with a web api to build on.`,
    // link: "https://nudolio.herokuapp.com/",
    github: "https://github.com/zany-ar/nudolio",
    techstack: ["Express.js", "React.js", "Redux", "MongoDB"],
    imgsrc: "/images/nudolio.png",
  },
];

export const sideProjects = [
  {
    title: "NerdKun",
    description: `Custom VTUBER implemented in Godot with real time face tracking.`,
    techstack: ["GDScript", "Godot", "Web Socket"],
    youtube: "https://www.youtube.com/watch?v=qriawXI3pRM",
  },
  {
    title: "Workaholic",
    description: `A time manager that shouts at you when you are not doing your work.`,
    techstack: ["Python", "JavaScript", "Chrome Extension"],
    github: "https://github.com/zany-ar/workaholic",
  },
  {
    title: "Kawaii-Vault",
    description: `Some sort of password manager that uses GitHub's Gist service to store its encrypted data.`,
    techstack: ["Rust", "AES-Encryption", "GitHub API"],
    github: "https://github.com/zany-ar/kawaii-vault",
  },
  {
    title: "0xVault",
    description: `Flutter project, It's an app for taking notes & saving your passwords with GitHub Gist's API.`,
    techstack: ["Flutter", "Dart", "GitHub API"],
    github: "https://github.com/zany-ar/0xVAULT",
    youtube: "https://www.youtube.com/watch?v=YMaDtI__OQE",
  },
  {
    title: "WeebMyIp",
    description: `Website with an API to get information on IP address and an anime girl to read your IP for you`,
    techstack: ["Python", "Flask", "HTML5", "CSS3"],
    github: "https://github.com/0xanteiku/weebmyip",
    link: "https://weebmyip.pythonanywhere.com",
  },
  {
    title: "MailBot",
    description: `A discord bot which forwards new emails to your discord server, you can reply or send new emails.`,
    techstack: ["Python", "AioIMAPLib", "AioSMTPLib"],
    github: "https://github.com/zany-ar/MailBot",
  },
  {
    title: "PasteJS",
    description: `A chrome extension to prevent both CSS & JS PasteJacking attacks`,
    techstack: ["JavaScript", "HTML5"],
    github: "https://github.com/zany-ar/PasteJS",
  },
];

export const tabs = ["Web Development", "Web Design", "Database", "General"];
export const techstack = [
  {
    name: "Visual Studio Code",
    image: "/tech/vscode.png",
    tab: "General",
    icon: <IoCodeSlashOutline fontSize={"34px"} />,
  },
  {
    name: "Next.js",
    image: "/tech/nextjs.png",
    tab: "Web Development",
    icon: <IoTriangleOutline fontSize={"34px"} />,
  },
  {
    name: "Figma",
    image: "/tech/figma.png",
    tab: "Web Design",
    icon: <IoLogoFigma fontSize={"34px"} />,
  },
  {
    name: "React.js",
    image: "/tech/reactjs.png",
    tab: "Web Development",
    icon: <IoLogoReact fontSize={"34px"} />,
  },
  {
    name: "Express.js",
    image: "/tech/expressjs.png",
    tab: "Web Development",
    icon: <IoLogoNodejs fontSize={"34px"} />,
  },
  {
    name: "MongoDB",
    image: "/tech/mongodb.png",
    tab: "Database",
    icon: <IoLeafOutline fontSize={"34px"} />,
  },
  {
    name: "JavaScript",
    image: "/tech/javascript.png",
    tab: "General",
    icon: <IoLogoJavascript fontSize={"34px"} />,
  },
  {
    name: "TypeScript",
    image: "/tech/typescript.png",
    tab: "General",
    icon: <IoCodeOutline fontSize={"34px"} />,
  },
  {
    name: "PHP",
    image: "/tech/php.png",
    tab: "General",
    icon: <IoCodeOutline fontSize={"34px"} />,
  },
  {
    name: "Python",
    image: "/tech/python.png",
    tab: "General",
    icon: <IoLogoPython fontSize={"34px"} />,
  },
  {
    name: "Node.js",
    image: "/tech/nodejs.png",
    tab: "General",
    icon: <IoLogoNodejs fontSize={"34px"} />,
  },
  {
    name: "PostgreSQL",
    image: "/tech/postgresql.png",
    tab: "Database",
    icon: <IoServerOutline fontSize={"34px"} />,
  },
  {
    name: "MySQL",
    image: "/tech/mysql.png",
    tab: "Database",
    icon: <IoServerOutline fontSize={"34px"} />,
  },
  {
    name: "Rust Lang",
    image: "/tech/rustlang.png",
    tab: "General",
    icon: <IoCodeOutline fontSize={"34px"} />,
  },
  {
    name: "CSharp",
    image: "/tech/csharp.png",
    tab: "General",
    icon: <IoCodeOutline fontSize={"34px"} />,
  },
  {
    name: "Redis",
    image: "/tech/redis.png",
    tab: "Database",
    icon: <IoLayersOutline fontSize={"34px"} />,
  },
  {
    name: "Django",
    image: "/tech/django.png",
    tab: "Web Development",
    icon: <IoEarthOutline fontSize={"34px"} />,
  },
  {
    name: "Flask",
    image: "/tech/flask.png",
    tab: "Web Development",
    icon: <IoEarthOutline fontSize={"34px"} />,
  },
  {
    name: ".Net Core",
    image: "/tech/dotnetcore.png",
    tab: "Web Development",
    icon: <IoEarthOutline fontSize={"34px"} />,
  },
  {
    name: "Chakra UI",
    image: "/tech/chakraui.png",
    tab: "Web Design",
    icon: <IoColorWandOutline fontSize={"34px"} />,
  },
  {
    name: "Material UI",
    image: "/tech/materialui.png",
    tab: "Web Design",
    icon: <IoColorWandOutline fontSize={"34px"} />,
  },
];
