export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  color: string;
  image: string;
  details?: string[];
  techStack?: string[];
}

export const projects: Project[] = [
  {
    slug: "elevenx",
    title: "ElevenX",
    category: "Frontend Developer",
    year: "2025",
    description: "Developed and maintained responsive web applications using React, Next.js, and Tailwind CSS.",
    tags: ["React", "Next.js", "Tailwind"],
    color: "#00E5FF",
    image: "/Eleven X.png",
    details: [
      "Developed and maintained responsive web applications using modern Frontend technologies such as React, NEXT and Tailwind CSS.",
      "Built reusable UI components to improve development efficiency and consistency across the platform.",
      "Collaborated with Backend developers and designers to deliver seamless user experiences.",
      "Optimized website performance, reducing load times and improving overall user engagement."
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML5", "CSS3"]
  },
  {
    slug: "ezlearn",
    title: "EzLearn",
    category: "Marketing Lead",
    year: "2025",
    description: "Led marketing initiatives, planned digital campaigns, and improved reach through data-driven decisions.",
    tags: ["Marketing", "Strategy", "Analytics"],
    color: "#B026FF",
    image: "/Ezlearn.jpeg",
    details: [
      "Led marketing initiatives to promote EZ Learn's services and increase user engagement.",
      "Planned and executed digital marketing campaigns across social media platforms.",
      "Collaborated with cross-functional teams to design promotional strategies and content.",
      "Analyzed campaign performance and improved reach through data-driven decisions.",
      "Contributed to brand awareness growth and user acquisition strategies."
    ],
    techStack: ["Digital Marketing", "Campaign Strategy", "Data Analytics", "Content Design"]
  },
  {
    slug: "migrant-care",
    title: "Migrant Care",
    category: "Web App",
    year: "2024",
    description: "A comprehensive platform dedicated to supporting and providing resources for migrants.",
    tags: ["React", "Node.js"],
    color: "#FF9900",
    image: "/Migrant Care.png",
    details: [
      "Designed and developed an intuitive dashboard for migrants to find verified local resources.",
      "Implemented a secure user system with location-based filtering for shelters, jobs, and legal aid.",
      "Optimized frontend performance to ensure accessibility in low-connectivity areas."
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Geolocation API"]
  },
  {
    slug: "hostel-desk",
    title: "Hostel Desk",
    category: "Web App",
    year: "2024",
    description: "Cloud-native hostel management system with AWS serverless backend.",
    tags: ["Next.js", "AWS Lambda", "DynamoDB", "SNS", "Cognito", "Amplify"],
    color: "#CCFF00",
    image: "/Hostel Desk.png",
    details: [
      "Developed a cloud-native hostel management system using Next.js and AWS services for scalability.",
      "Implemented serverless backend using AWS Lambda, enabling efficient and cost-effective request handling.",
      "Designed and managed NoSQL database architecture using DynamoDB for fast and reliable data storage.",
      "Integrated AWS Cognito for secure authentication and role-based access control.",
      "Enabled real-time notifications using AWS SNS for updates on requests and system activities.",
      "Deployed the application using AWS Amplify, ensuring seamless CI/CD and hosting."
    ],
    techStack: ["Next.js", "AWS Lambda", "DynamoDB", "AWS SNS", "AWS Cognito", "AWS Amplify"]
  },
  {
    slug: "ride-share",
    title: "Ride Share",
    category: "Web App",
    year: "2024",
    description: "Ride-sharing application with real-time tracking and matchmaking.",
    tags: ["Next.js", "Supabase"],
    color: "#FF3366",
    image: "/Rideshare.png",
    details: [
      "Developed a ride-sharing application to connect users with drivers for cost-effective transportation.",
      "Implemented real-time ride booking, driver matching, and location tracking features.",
      "Designed an intuitive and responsive user interface for seamless user experiences.",
      "Built backend services for ride management, route optimization, and fare estimation.",
      "Integrated secure authentication and database management for storing user and ride data."
    ],
    techStack: ["Next.js", "Supabase", "PostgreSQL", "Google Maps API", "Tailwind CSS"]
  }
];
