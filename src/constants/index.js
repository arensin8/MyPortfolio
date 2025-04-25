import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  nextjs,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  university,
  jobit,
  tripguide,
  threejs,
  food,
  adminpanel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Node.Js Developer",
    icon: backend,
  },
  {
    title: " Web Performance Optimization",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Next",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Customer Support Specialist",
    company_name: "Digitech.am",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "June 2021 - June 2022",
    points: [
      "Assisted customers with technical troubleshooting and issue resolution.",
      "Provided email, chat, and phone support, ensuring high customer satisfaction.",
      "Guided users through software installations, configurations, and updates.",
      "Created and maintained help articles & FAQs to improve self-service support.",
    ],
  },
  {
    title: "Technical Support Specialist",
    company_name: "Digitech.am",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2022 - Oct 2024",
    points: [
      "Diagnosed and resolved hardware, software, and network-related issues for end-users.",
      "Provided step-by-step technical assistance and guidance via remote desktop, chat, and email.",
      "Performed system setups, software installations, and configurations across platforms.",
      "Logged and tracked technical issues using tools like Jira, Zendesk, or Freshdesk.",
    ],
  },
  {
    title: "Freelance Frontend Developer ",
    // company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2023 - June 2024",
    points: [
      "Developed a responsive and user-friendly web application using React.js and Node.js.",
      "Designed and implemented an intuitive Website for my university.",
      "Integrated backend APIs and handled user authentication & data management.",
      "Optimized the frontend for better performance and accessibility.",
    ],
  },
];

const projects = [
  {
    name: "My Universities IT Department ",
    description:
      "Web-based platform designed to guide new IT students by providing essential information such as their learning roadmap, course details, department news, and faculty insights—offering a clear and accessible introduction to the university's IT program.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: university,
    source_code_link: "https://github.com/arensin8/UniPuplitProject",
    source_code_link2: "https://aesthetic-trifle-5c2dec.netlify.app/",
  },
  {
    name: "Food Delivery Full Stack website",
    description:
      "Full-stack web application that allows users to explore food menus, place orders, and manage their cart—built using React, Node.js, and MongoDB to deliver a smooth and efficient food ordering experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: food,
    source_code_link: "https://github.com/arensin8/Food-Delivery",
    source_code_link2: "https://coruscating-kitten-43867e.netlify.app/",
  },
  {
    name: "Admin panel",
    description:
      "Frontend admin panel interface designed to manage students, products, logs, and more—built with a modern UI to provide a clear, user-friendly experience for administrators handling university IT system data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: adminpanel,
    source_code_link: "https://github.com/arensin8/React-AdminPanel",
  },
];

export { services, technologies, experiences, projects };
