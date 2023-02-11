import {
  FaFile,
  FaGithub,
  FaGlobeAmericas,
  FaInfoCircle,
} from "react-icons/fa";

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
          "Assisted 5000+ students in course planning and gained 1500+ registered users.",
      },
      {
        emoji: "🔐",
        content:
          "Defined RESTful API specification and implemented JWT authorization with Auth0 service. ",
      },
      {
        emoji: "⚡️",
        content:
          "Implemented serverless functions to parse waitlist data from the official course registration system.",
      },
      {
        emoji: "🤝",
        content:
          "Acquired by Office of Academic Affairs of National Taiwan University in Q3 2022.",
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
        link: "https://course.myntu.me",
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
