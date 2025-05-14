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
  username: "Arti Jadhav",
  title: "Hi all, I'm Arti",
  subTitle: emoji(
"A passionate Full Stack Java Developer 🚀 having experience in building web applications using Java / Spring Boot / ReactJS along with REST APIs, MySQL, and other modern tools and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/uc?id=1Ey5ZnZoi-VxcUBBp52g1NFnwHjiqZHJ9&export=download", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/artidabh",
  linkedin: "https://www.linkedin.com/in/arti-jadhav-494a25349",
  gmail: "artidabhade1521@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WITH A PASSION FOR SOLVING COMPLEX PROBLEMS AND BUILDING SCALABLE APPLICATIONS",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces with React"),
    emoji("⚡ Build scalable and efficient back-end services using Java, Spring Boot, and Microservices architecture"),
    emoji("⚡ Integration of third-party services such as AWS, Keycloak, Vault"),
    emoji("⚡ Expertise in role-based access control and secure application development"),
    emoji("⚡ Passionate about developing RESTful APIs and maintaining clean, maintainable code"),
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab fa-spring",
    },
    {
      skillName: "Microservices",
      fontAwesomeClassname: "fas fa-cogs",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Keycloak",
      fontAwesomeClassname: "fas fa-lock",
    },
    {
      skillName: "Vault",
      fontAwesomeClassname: "fas fa-shield-alt",
    },
    {
      skillName: "Spring Security",
      fontAwesomeClassname: "fas fa-shield-alt",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};


const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Modern College, Nigdi, Pune",
      logo: require("./assets/images/modernCollegeLogo.png"),
      subHeader: "Bachelor of Pharmacy",
      duration: "2014 - 2018",
      desc: "Graduated with 74% and gained foundational knowledge in pharmaceutical sciences.",
      descBullets: [
        "Completed practical training and academic projects",
        "Participated in healthcare awareness programs"
      ]
    },
    {
      schoolName: "Sant Tukaram Vidyalaya, Dehugaon",
      logo: require("./assets/images/santTukaramLogo.png"),
      subHeader: "SSC (10th Standard)",
      duration: "2012",
      desc: "Scored 86% in the SSC Board Examination.",
      descBullets: [
        "Achieved academic excellence in Science and Mathematics"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr Java Developer",
      company: "9i Web Solutions Pvt Ltd, Hyderabad",
      companylogo: require("./assets/images/9iWebSolutionsLogo.png"),
      date: "Aug 2022 – Present",
      desc: "Developed and deployed RESTful services and APIs with a microservices architecture. Led the complete development lifecycle for various features, from requirement gathering to deployment.",
      descBullets: [
        "Integrated HashiCorp Vault with Spring Boot for secure storage and management of confidential data",
        "Optimized application performance and ensured system scalability",
        "Participated in Agile ceremonies, including sprint planning, daily stand-ups, and retrospectives"
      ]
    },
    {
      role: "Database Analyst (Contract)",
      company: "Straive (formerly Scope e-Knowledge Center)",
      companylogo: require("./assets/images/straiveLogo.png"),
      date: "May 2022 – Aug 2022",
      desc: "Conducted analysis and normalization of large-scale academic databases using MySQL. Ensured data integrity and identified anomalies for resolution.",
      descBullets: [
        "Performed ETL processes to ensure clean, structured datasets",
        "Coordinated resolution of data anomalies with the development team"
      ]
    },
    {
      role: "Jr Java Developer",
      company: "9i Web Solutions Pvt Ltd, Hyderabad",
      companylogo: require("./assets/images/9iWebSolutionsLogo.png"),
      date: "Jan 2021 – May 2022",
      desc: "Used Java 8 features like Streams and Optional to write cleaner, more efficient business logic. Participated in debugging and enhancing existing features.",
      descBullets: [
        "Followed Agile methodologies with Jira and Git for source control and task tracking",
        "Assisted in debugging and enhancing features for system stability"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Key accomplishments, certifications, and live project deployments showcasing my skills and learning.",

  achievementsCards: [
    {
      title: "FarmaFriend - FinTech ERP for Farmers",
      subtitle:
        "Designed and developed a full-stack FinTech ERP system to help farmers manage crops, inventory, and transactions using React and Spring Boot.",
      image: require("./assets/images/farmaFriendLogo.webp"),
      imageAlt: "FarmaFriend Logo",
      footerLink: [
        {
          name: "Frontend GitHub",
          url: "https://github.com/artidabhade/farmafriend-frontend"
        },
        {
          name: "Backend GitHub",
          url: "https://github.com/artidabhade/farmafriend-backend"
        }
      ]
    },
    {
      title: "Spring Boot + Keycloak Integration",
      subtitle:
        "Implemented secure login and role-based access control using Keycloak across multiple modules including admin and user dashboards.",
      image: require("./assets/images/keycloakLogo.webp"),
      imageAlt: "Keycloak Logo",
      footerLink: [
        {
          name: "Integration Code Sample",
          url: "https://github.com/artidabhade/keycloak-integration-doc"
        }
      ]
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certification from SMIT for PWA Web App Development",
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
  display: true
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
 // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8149732553",
  email_address: "artidabhade1521@gmail.com",
  display: true
};



// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
