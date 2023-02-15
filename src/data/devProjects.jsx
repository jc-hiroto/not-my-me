import { FaGithub, FaGlobeAmericas } from "react-icons/fa";

const projects = [
  {
    title: "NTUCourse Neo",
    img: "https://i.imgur.com/h9NQVmw.jpg",
    desc: "A redesigned course planning website for students in National Taiwan University.",
    period: "Nov. 2021 - Present",
    info: [
      {
        emoji: "💪",
        content:
          "Assisted 5000+ students in course planning with intuitive user experience.",
      },
      {
        emoji: "🔐",
        content:
          "Improved information security through implementing JWT authorization with SSO service.",
      },
      {
        emoji: "⚡️",
        content:
          "Decreased data complexity by refactoring Prisma schema and migrating with Postgres database.",
      },
    ],
    profession: ["Node.js", "React", "MongoDB", "PGSQL"],
    btns: [
      {
        title: "Repository",
        link: "https://github.com/NTUCourse-Neo",
        icon: <FaGithub />,
      },
      {
        title: "Website",
        link: "https://course.ntu.edu.tw/",
        icon: <FaGlobeAmericas />,
      },
    ],
  },
  {
    title: "NTU Relief",
    img: "https://i.imgur.com/rw3uFou.jpg",
    desc: "Building a user-friendly website for helping people who have similar emotional problems to ask.",
    period: "Oct. 2022 - Jun. 2023",
    info: [
      {
        emoji: "⚡️",
        content:
          "In charge of full stack, which was mainly developed with JavaScript.",
      },
      {
        emoji: "🤝",
        content:
          "Designed frontend interface using Material Design to provide user-friendly interface.",
      },
      {
        emoji: "🐳",
        content: "Defined RESTful API specification and deployed with Docker.",
      },
    ],
    profession: ["React", "axios", "Express", "Docker", "MongoDB"],
    btns: [
      {
        title: "Repository",
        link: "https://github.com/weitude/relief",
        icon: <FaGithub />,
      },
      {
        title: "Website",
        link: "https://nturelief.me",
        icon: <FaGlobeAmericas />,
      },
    ],
  },
];

export { projects };
