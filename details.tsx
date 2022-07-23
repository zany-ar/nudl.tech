import { Helper } from "./src/components/Helper"
import NextLink from "next/link"
import { Link } from "@chakra-ui/react"


export const email = "zanyar@nudl.tech"

export const intro = {
  name: 'Zanyar Jamal',
  moto: 'I build web applications.',
  text: (
    <>I'm a full stack developer and a freelancer who likes to build digital products and services, alias {' '}
      <NextLink href={'https://github.com/0xCN/'} passHref>
        <Link>nudlツ</Link>
      </NextLink>.
      If you want to partner up on a project or just want to talk:
    </>
  )
}

export const social = {
  github: 'https://github.com/0xCN/',
  youtube: 'https://www.youtube.com/channel/UCjHuPi8CE4U_5BbnpyYvjQg'
}

export const aboutMe = (
  <>
    Hello! My name is <Helper>Zanyar</Helper>, I build web applications, freelance, tutor programming, and live off eating instant ramen 🍜.
    <br />
    <br />
    I first started out as a <Helper>cyber-security enthusiast</Helper> — and learned programming only to build automated tools to make hacking easier and faster.
    <br />
    <br />
    Since then, I’ve updated my repertoire with the <Helper>latest technologies</Helper>, and have even become a jack of all trades and worked in most fields including {' '}
    <Helper>System Design</Helper>, <Helper>Mobile App Development</Helper>, and my current occupation a <Helper>Full Stack Developer</Helper>.
    <br />
    <br />
    Here are a few technologies I’ve been working with recently:
  </>
)

export const recentTechnologies = ["Next.js", "TypeScript", "MongoDB", "Redis", "Digital Ocean", "Chakra-UI"]

export const projects = [
  {
    title: 'Pentesting Jobs',
    description: `A job board for cyber-security experts, find / post jobs.`,
    link: 'https://pentestingjobs.co',
    techstack: ["TypeScript", "Next.js", "MongoDB", "Material-UI"],
    imgsrc: '/images/pentesting_jobs.png'
  },
  {
    title: 'Nudolio',
    description: `Open source software license key manager built with MERN & redux with a web api to build on.`,
    link: 'https://nudolio.herokuapp.com/',
    github: 'https://github.com/0xCN/nudolio',
    techstack: ["Express.js", "React.js", "Redux", "MongoDB"],
    imgsrc: '/images/nudolio.png'
  }
]

export const sideProjects = [
  {
    title: 'Workaholic',
    description: `A time manager that shouts at you when you are not doing your work.`,
    techstack: ["Python", "JavaScript", "Chrome Extension"],
    github: 'https://github.com/0xCN/workaholic'
  },
  {
    title: 'Kawaii-Vault',
    description: `Some sort of password manager that uses GitHub's Gist service to store its encrypted data.`,
    techstack: ["Rust", "AES-Encryption", "GitHub API"],
    github: 'https://github.com/0xCN/kawaii-vault'
  },
  {
    title: '0xVault',
    description: `Flutter project, It's an app for taking notes & saving your passwords with GitHub Gist's API.`,
    techstack: ["Flutter", "Dart", "GitHub API"],
    github: 'https://github.com/0xCN/0xVAULT',
    youtube: 'https://www.youtube.com/watch?v=YMaDtI__OQE'
  },
  {
    title: 'WeebMyIp',
    description: `Website with an API to get information on IP address and an anime girl to read your IP for you`,
    techstack: ['Python, Flask', 'HTML5', 'CSS3'],
    github: 'https://github.com/0xanteiku/weebmyip',
    link: 'https://weebmyip.pythonanywhere.com'
  },
  {
    title: 'MailBot',
    description: `A discord bot which forwards new emails to your discord server, you can reply or send new emails.`,
    techstack: ['Python', 'AioIMAPLib', 'AioSMTPLib'],
    github: 'https://github.com/0xCN/MailBot'
  },
  {
    title: 'PasteJS',
    description: `A chrome extension to prevent both CSS & JS PasteJacking attacks`,
    techstack: ['JavaScript', 'HTML5'],
    github: 'https://github.com/0xCN/PasteJS'
  }
]