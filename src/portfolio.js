/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Thirunavukkarasu P",
  title: "Hi all, I'm Thirunavukkarasu",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Angular / Nodejs / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/19SBRFOi62jft7tP-O_w4Kx6ZjDkArxId/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Thirunavukkarau/",
  linkedin: "https://www.linkedin.com/in/thirunavukkarasu-periyayya-4823bb254/",
  gmail: "thirunavukkarasup234@gmail.com",
  gitlab: "#",
  facebook: "#",
  medium: "#",
  stackoverflow: "#",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bharathidhasan University",
      logo: require("./assets/images/bdu.jpg"),
      subHeader: "Master of Computer Application (Part-Time)",
      duration: "Nov 2025 - April 2027",
      desc: "Currently pursuing part-time Master's in Computer Applications while gaining practical industry experience. Balancing academic coursework with professional responsibilities to develop comprehensive expertise in software development, advanced algorithms, and system design.",
      descBullets: [
        "Studying advanced topics in data structures, machine learning, and cloud computing",
        "Applying theoretical concepts directly to real-world professional projects",
        "Developing time management skills by balancing work and academic commitments",
        "Working on research projects focused on scalable software architectures"
      ]
    },
    {
      schoolName: "Bharathidhasan University",
      logo: require("./assets/images/bdu.jpg"),
      subHeader: "Bachelor of Computer Application",
      duration: "July 2019 - April 2022",
      desc: "Completed undergraduate degree in Computer Applications with focus on programming, databases, and web technologies. Worked on academic projects and participated in seminars on emerging technologies.",
      descBullets: [
        "Developed mini-projects using Node js, Python, and web frameworks",
        "Presented research papers in inter-college symposiums",
        "Collaborated on a final-year project focused on software solutions for small businesses"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "100%"
    },
    {
      Stack: "Backend",
      progressPercentage: "100%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Dental Suite 360",
      companylogo: require("./assets/images/bharathidasan_logo.png"),
      date: "March 2024 – Present",
      desc: "Developed a comprehensive chat module using Angular and Node.js, enabling real-time user-to-user and group chat functionality. Implemented support management to streamline issue tracking and customer support workflows. Designed and developed a robust task management module where users can reassign tasks and request extensions, with real-time notifications for task owners.",
      descBullets: [
        "Integrated real-time updates in the chat and task management modules using WebSockets (or any applicable real-time tech). Ensured seamless communication between the frontend (Angular)",
        "Link: https://dental-suite360.web.app/login"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Synthgate Chat Bot AI",
      companylogo: require("./assets/images/systemtwo.png"),
      date: "Jun 2023 – March 2024",
      desc: "I was responsible for the technical implementation of chatbot from scratch. This involved in designing the chatbot , setting up the project architecture and doing implementation itself",
      descBullets: [
        "This product mainly focused on text based chatBot. I’ve involved on this project for gathered and analyzed the business requirements - Designed the application - Developed the application by React Js and tailwind Css.",
        "Application walkthroughs to Client to confirm any changes- Deployed via Ubuntu linux server.",
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Invoicing Billing Application",
      companylogo: require("./assets/images/invoiceheader.webp"),
      date: "May 2023 – Present",
      desc: "Developed and maintained a robust invoice billing web based application using React.js and Tailwind css for the frontend, Python with Flask framework for the backend, and MongoDB for data storage. Designed a user-friendly interface for efficient invoice management and integrated features such as automated billing, real-time updates, and secure data handling.",
      descBullets: [
        "React.js to create dynamic and responsive user experiences, employed Python for scalable and performant backend services, and utilized MongoDB for flexible and reliable data management.",
        "Link: https://invoicefree.in",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/bharathidasan_logo.png"),
      projectName: "Dental Suite 360",
      projectDesc: "Developed a comprehensive chat module using Angular and Node.js, enabling real-time user-to-user and group chat functionality. Implemented support management to streamline issue tracking and customer support workflows. Designed and developed a robust task management module where users can reassign tasks and request extensions, with real-time notifications for task owners.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dental-suite360.web.app/login"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/invoiceheader.webp"),
      projectName: "Invoicing Web Application",
      projectDesc: "Developed and maintained a robust invoice billing web based application using React.js and Tailwind css for the frontend, Python with Flask framework for the backend, and MongoDB for data storage. Designed a user-friendly interface for efficient invoice management and integrated features such as automated billing, real-time updates, and secure data handling.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://invoicefree.in"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6380956287",
  email_address: "thirunavukkarasup234@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
