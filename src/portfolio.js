/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "vaishnavi",
   logo:{logo_name: "logo.jpg"},
  nickname: "vaishnavi",
  full_name: "Vaishnavi Khatake",
  subTitle: "A Computer Science Graduate. Always learning 🔥.",
   resumeLink:
     "https://drive.google.com/drive/u/0/folders/1VrFv1mGX89xIlXEh9-XgMqwuu8D5588E",
  mail: "vkhatke02@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/vaishnavisk1212",
  linkedin: "https://www.linkedin.com/in/vaishnavi-khatake-8497b8238/",
  gmail:"vkhatke02@gmail.com",
  
  // twitter: "https://twitter.com/HaspeNikhil",
  instagram: "https://www.instagram.com/vaishnavi.khatke?igsh=MWN0aHB4eGd3endsNg==",
};

const skills = {
  data: [
    {
      title: "I'm Proficient in",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web  applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡An enthusiastic Cloud, DevOps, and Full Stack Developer seeking a challenging role in a reputable organization",
        "⚡ Handling Databases like Mysql and Mongodb",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "fa-brands fa-java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
          
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "fa-brands fa-aws",
          style: {
            color: "#E94E32",
          },
          
        },
      ],
    },
    {
      title: "I'm familiar with",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with multiple databases like firestore, monogoDB, MySql",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
       {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Education",
      subtitle: "Bachelor in Information Technology",
      logo_path: "ssec.png",
      alt_name: "SSEC",
      duration: "2024 - Present",
      descriptions: [
        "⚡ I have  completed my bachelors in Information Technology.",
      ],
      // website_link: "http://www.ssgec.ac.in/",
    }
    
  ],
};

const certifications = {
  certifications: [
    {
      title: "ReactJS Zero to Mastery",
      subtitle: "Devtown",
      logo_path: "react.png",
      certificate_link:
        "https://www.linkedin.com/posts/vaishnavi-khatake-8497b8238_devtown-certificateofcompletion-webdevelopment-activity-7202954066618908672-023C?utm_source=share&utm_medium=member_desktop",
      alt_name: "ReactJS Course",
      color_code: "#1d1d1d",
    },
    {
      title: "Python",
      subtitle: "Swayam",
      logo_path: "python.png",
      certificate_link: "https://www.linkedin.com/posts/vaishnavi-khatake-8497b8238_python-swayam-codingjourney-activity-7213104344374599680-n-hW?utm_source=share&utm_medium=member_desktop0",
      alt_name: "Python Course",
      color_code: "#1d1d1d",
    },
    {
      title: "Java",
      subtitle: "Sololearn",
      logo_path: "java.png",
      certificate_link: "https://www.sololearn.com/certificates/CT-KS2TKNMC",
      alt_name: "Java Course",
      color_code: "#1d1d1d",
    },
    {
      title: "HTML",
      subtitle: "Coincent",
      logo_path: "html.png",
      certificate_link:
        "https://www.linkedin.com/posts/vaishnavi-khatake-8497b8238_i-am-happy-to-share-with-you-all-i-just-wrapped-activity-7135331877384593408-mN5A?utm_source=share&utm_medium=member_desktop",
      alt_name: "HTML Course",
      color_code: "#1d1d1d",
    },
    {
      title: "CSS",
      subtitle: "Coincent",
      logo_path: "css.png",
      certificate_link:
        "https://www.linkedin.com/posts/vaishnavi-khatake-8497b8238_i-am-happy-to-share-with-you-all-i-just-wrapped-activity-7135331877384593408-mN5A?utm_source=share&utm_medium=member_desktop",
      alt_name: "CSS Course",
      color_code: "#1d1d1d",
    },
    {
      title: "JavaScript",
      subtitle: "SoloLearn",
      logo_path: "js.png",
      certificate_link:
"https://www.sololearn.com/certificates/CC-UHZ9WYPT",
      alt_name: "JavaScript Course",
      color_code: "#1d1d1d",
    },
    {
      title: "RDBMS SQl",
      subtitle: "SoloLearn",
      logo_path: "sql.png",
      certificate_link:
        "https://www.sololearn.com/certificates/CT-L1OFI4EX",
      alt_name: "MySql Database Query Language",
      color_code: "#1d1d1d",
    },
  ],
};

// Experience Page
const experience = {
  title: "Internships",
  description:
    "😢 Currently I'am applying for internships, Maybe you can give me one :)",
  header_image_path: "experience.svg",
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vaishnavi.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Donation Website",
      url: "https://github.com/vaishnavisk1212/Donation-Website",
      description:
        "\' Helping Hand and Donation\' is a user-friendly website providing key information about our Solapur-based NGO, making it easy for you to explore and support our cause",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "php",
          iconifyClass: "logos-php",
        },
        {
          name: "sql",
          iconifyClass: "logos-sql",
        },
        
      ],
    },
    {
      id: "1",
      name: "Weather App",
      url: "https://github.com/vaishnavisk1212/weather_detection_app/tree/main/weather-app",
      description:
        "This is a web app developed as a final project for SheCodes React using React.js. It allows users to search for the weather conditions of any city in the world.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React js",
          iconifyClass: "logos-react",
        },
      ],
    },
    
    {
      id: "2",
      name: "Zomato Clone",
      url: "https://github.com/vaishnavisk1212/zomato_clone",
      description:
        "Fully Responsive ,Elegant UI Zomato website using html css react anf javascript.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
       
      ],
    },
  
    {
      id: "3",
      name: "Rock Paper Scissor Game",
      url: "https://github.com/vaishnavisk1212/rock_paper_scissor?tab=readme-ov-file",
      description:
        "Rock, Paper, Scissors game allows players to engage in a classic duel against the computer by making choices of Rock, Paper, or Scissors. ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "4",
      name: "Currency Converter",
      url: "https://github.com/vaishnavisk1212/currency_converter",
      description:
        "This is a currency converter web application that fetches real-time data for currency conversion rates using HTML, CSS, and JavaScript.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "5",
      name: "spotify-clone-app",
      url: "https://github.com/vaishnavisk1212/Spotify-Clone-App/tree/main/spotify-clone-app-master",
      description:
        "Spotify UI clone using Spotify API itself. Authentication using Spotify API, supports all types of login.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "6",
      name: "Chat Application",
      url: "https://github.com/vaishnavisk1212/chat-application",
      description:
        "Simple our childhood loved game Snake built using pygame with audio support in friendly language Python.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "7",
      name: "Todo List",
      url: "https://github.com/vaishnavisk1212/todolist",
      description:
        "The To-Do List app is a user-friendly task management tool that keeps you organized and productive. Easily add, update, and delete tasks, and stay on top of your daily, weekly, and monthly tasks with this efficient app.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "8",
      name: "Calculator",
      url: "https://github.com/vaishnavisk1212/calculator",
      description:
        "A Simple Calculator for basic mathematical operations having elegant UI with both light and dark mode.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
