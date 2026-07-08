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
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "hostel-desk",
    title: "Hostel Desk",
    category: "Cloud-Based Hostel Management System",
    year: "2024",
    description: "Engineered a serverless hostel management platform using Next.js, AWS Lambda, API Gateway, and DynamoDB, automating maintenance requests, complaint management, and service tracking.",
    tags: ["Next.js", "AWS Lambda", "API Gateway", "DynamoDB", "SNS", "Cognito", "Amplify"],
    color: "#CCFF00",
    image: "/hostel-desk.png",
    details: [
      "Engineered a serverless hostel management platform using Next.js, AWS Lambda, API Gateway, and DynamoDB, automating maintenance requests, complaint management, and service tracking.",
      "Implemented AWS Cognito, SNS, S3, and Amplify for secure authentication, real-time notifications, cloud storage, and scalable deployment, delivering a reliable and responsive user experience."
    ],
    techStack: ["Next.js", "AWS Lambda", "API Gateway", "DynamoDB", "AWS Cognito", "AWS SNS", "AWS S3", "AWS Amplify"]
  },
  {
    slug: "ride-share",
    title: "RideShare",
    category: "Ride Sharing Platform",
    year: "2024",
    description: "Developed a secure college-exclusive ride-sharing platform enabling students to post, discover, and book rides using Next.js and Supabase for seamless real-time data management.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    color: "#FF3366",
    image: "/rideshare.png",
    details: [
      "Developed a secure college-exclusive ride-sharing platform enabling students to post, discover, and book rides using Next.js and Supabase for seamless real-time data management.",
      "Built responsive interfaces for ride listings, booking requests, and user profiles, delivering an intuitive user experience with optimized performance across desktop and mobile devices."
    ],
    techStack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://github.com/Sumidson/"
  }
];
