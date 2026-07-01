export interface Service {
  slug: string;
  num: string;
  title: string;
  description: string;
  tools: string[];
  details?: string[];
}

export const services: Service[] = [
  {
    slug: "ui-ux-design",
    num: "01",
    title: "UI/UX Design",
    description: "I create modern UI/UX experiences that are visually appealing, intuitive, and built with usability in mind. My focus is on transforming complex ideas into simple, engaging interfaces that users enjoy interacting with.",
    tools: ["Figma", "Adobe XD", "Tailwind CSS", "Framer", "Material Design", "Design Systems"],
    details: [
      "User-Centered Design: Creating interfaces based on user needs, usability principles, and intuitive navigation to deliver seamless experiences.",
      "Wireframing & Prototyping: Transforming ideas into interactive wireframes and high-fidelity prototypes before development to validate user flows.",
      "Responsive Interface Design: Designing layouts that adapt beautifully across desktops, tablets, and mobile devices while maintaining consistency.",
      "Design Systems: Building reusable UI components, typography, spacing, and color systems to ensure scalable and consistent designs.",
      "User Experience Optimization: Improving navigation, accessibility, and interaction patterns to make products simple, engaging, and efficient.",
      "Developer-Friendly Design: Creating designs that are practical to implement, ensuring a smooth transition from design to development with pixel-perfect execution."
    ]
  },
  {
    slug: "web-development",
    num: "02",
    title: "Web Development",
    description: "I transform ideas into production-ready web applications by combining modern frontend technologies with scalable cloud infrastructure. My focus is on writing clean, maintainable code while delivering intuitive user experiences and reliable backend systems.",
    tools: ["React", "Next.js", "TypeScript", "Node.js", "AWS", "Tailwind CSS", "PostgreSQL", "Supabase"],
    details: [
      "Modern Frontend Development: Build responsive, interactive user interfaces using React, Next.js, and TypeScript with reusable components and clean architecture.",
      "Full-Stack Solutions: Develop complete applications by integrating frontend experiences with secure backend APIs, databases, and authentication systems.",
      "AWS Cloud Integration: Design and deploy scalable cloud applications using AWS services including Lambda, API Gateway, Cognito, DynamoDB, S3, SNS, and Amplify.",
      "Performance & Optimization: Improve loading speed, SEO, accessibility, and Core Web Vitals through code optimization, lazy loading, image optimization, and efficient rendering.",
      "Authentication & Security: Implement secure authentication, authorization, protected routes, and role-based access control using modern authentication providers.",
      "API Development & Integration: Create and integrate REST APIs while connecting third-party services, AI APIs, payment gateways, and cloud services.",
      "Database Design: Work with SQL and NoSQL databases such as PostgreSQL, Supabase, and DynamoDB to build reliable, scalable applications.",
      "Responsive UI/UX: Develop mobile-first interfaces that provide a seamless experience across desktops, tablets, and smartphones."
    ]
  },
  {
    slug: "mobile-apps",
    num: "03",
    title: "Mobile Apps",
    description: "Cross-platform mobile applications delivering native performance. From concept to App Store with seamless user experiences.",
    tools: ["React Native", "iOS", "Android"],
    details: [
      "Cross-Platform Apps: Developing high-performance mobile apps for both iOS and Android using React Native from a single codebase.",
      "Native Integrations: Interfacing with mobile hardware features like camera, GPS/location, and local notifications.",
      "App Store Deployments: Assisting in setting up and deploying applications to Google Play Store and Apple App Store.",
      "Smooth Animations: Implementing interactive and responsive mobile animations for premium user experiences."
    ]
  },
  {
    slug: "cloud-aws",
    num: "04",
    title: "Cloud & AWS",
    description: "I specialize in building cloud-powered applications using AWS services and serverless technologies. From authentication and APIs to databases and deployment, I create scalable, secure, and production-ready cloud solutions that power modern web applications.",
    tools: ["AWS Lambda", "Amazon Cognito", "Amazon DynamoDB", "Amazon API Gateway", "Amazon S3", "Amazon SNS", "AWS Amplify", "Node.js"],
    details: [
      "Serverless Architecture: Developing scalable backend solutions using AWS Lambda, API Gateway, and event-driven workflows to reduce infrastructure management.",
      "Authentication & Security: Implementing secure user authentication and authorization with Amazon Cognito, role-based access control, and protected APIs.",
      "Cloud Database Solutions: Designing and managing scalable NoSQL databases with Amazon DynamoDB for high-performance applications.",
      "Cloud Storage & Media: Using Amazon S3 for secure storage of files, images, documents, and application assets with efficient access management.",
      "API Development & Integration: Building secure REST APIs with Amazon API Gateway and integrating them with serverless backend services.",
      "Deployment & Hosting: Deploying modern web applications using AWS Amplify with automated builds, continuous deployment, and custom domain support.",
      "Notifications & Event Processing: Implementing real-time notifications and event-driven communication using Amazon SNS and AWS services.",
      "Monitoring & Optimization: Optimizing cloud resources for performance, scalability, security, and cost efficiency while following AWS best practices."
    ]
  }
];
