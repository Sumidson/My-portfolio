export interface ProjectFeature {
  icon?: string;
  title: string;
  description: string;
}

export interface ProjectScreenshot {
  url: string;
  title: string;
  caption: string;
}

export interface ProjectRoadmap {
  title: string;
  description: string;
  items: string[];
}

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
  githubUrl?: string;
  features?: ProjectFeature[];
  screenshots?: ProjectScreenshot[];
  roadmap?: ProjectRoadmap;
}

export const projects: Project[] = [
  {
    slug: "a-healthier-you",
    title: "A Healthier You",
    category: "Android Mental Wellness & Mood Tracking App",
    year: "2026",
    description: "An Android application engineered to help users better understand and manage their mental well-being through intuitive everyday tracking, personalized mood-based support, guided relaxation, and data-driven wellness insights. Built with React Native & Expo on the frontend and powered by Supabase for secure cloud authentication and backend services.",
    tags: ["React Native", "Expo", "Supabase", "PostgreSQL", "Data Visualization", "Mobile UX", "Push Notifications"],
    color: "#10B981",
    image: "/a-healthier-you.png",
    details: [
      "Engineered a cross-platform Android mobile app with React Native and Expo, incorporating smooth micro-interactions, responsive touch targets, and calming visual aesthetics.",
      "Integrated Supabase for secure user authentication, Row-Level Security (RLS) policies, and scalable PostgreSQL database operations for logging check-ins, journals, and habits.",
      "Built an intuitive Mood & Wellness Analytics module that tracks emotional trends, calculates weekly averages, and surfaces actionable wellness insights based on user activity.",
      "Implemented guided breathing exercises (5-4-3-2-1 grounding techniques) and sleep quality tracking to provide immediate in-the-moment relief during stressful episodes.",
      "Designed a private digital journaling system with sentiment tagging, search filtering, mindful streak gamification, and customizable themes to foster consistent healthy habits."
    ],
    techStack: [
      "React Native",
      "Expo",
      "Supabase",
      "PostgreSQL",
      "Expo Notifications",
      "Data Visualization",
      "React Navigation",
      "AsyncStorage",
      "TypeScript"
    ],
    features: [
      {
        icon: "Smile",
        title: "Mood Tracking",
        description: "Log emotional states throughout the day and identify patterns and triggers over time."
      },
      {
        icon: "BarChart3",
        title: "Mood & Wellness Reports",
        description: "Visualize trends, weekly averages, and data-driven insights derived from logged entries."
      },
      {
        icon: "HeartHandshake",
        title: "Mood-Based Support",
        description: "Receive personalized suggestions and calming activities tailored to low, anxious, or stressed moments."
      },
      {
        icon: "BookOpen",
        title: "Digital Journal",
        description: "Private sanctuary to write and reflect on daily thoughts, tagged with emotional sentiments."
      },
      {
        icon: "Wind",
        title: "Breathing & Relaxation",
        description: "Guided breathing sessions and mindfulness exercises designed for quick stress reduction."
      },
      {
        icon: "Moon",
        title: "Sleep & Lifestyle Tracker",
        description: "Monitor bedtime quality, habit matrices, and daily lifestyle factors influencing mental health."
      },
      {
        icon: "BellRing",
        title: "Smart Notifications",
        description: "Timely check-in reminders, wellness prompts, and encouragement throughout the day."
      },
      {
        icon: "Sparkles",
        title: "Daily Motivation",
        description: "Fresh motivational thoughts, affirmations, and quotes to inspire positive daily momentum."
      },
      {
        icon: "Palette",
        title: "Customizable Themes",
        description: "Tailor visual palettes and interface styles to personal comfort and aesthetic preferences."
      }
    ],
    screenshots: [
      {
        url: "/projects/healthier-you/screen-4.jpg",
        title: "Daily Mood & Quote",
        caption: "Home check-in dashboard with mood logging, daily quote, and streak badges"
      },
      {
        url: "/projects/healthier-you/screen-3.jpg",
        title: "Insights & Mood Trend",
        caption: "Weekly average mood analytics, reflection insights, and trend graph"
      },
      {
        url: "/projects/healthier-you/screen-1.jpg",
        title: "Quick Actions & Streaks",
        caption: "Mindful milestones, quick action hub, and daily goal progress tracker"
      },
      {
        url: "/projects/healthier-you/screen-5.jpg",
        title: "Digital Journal",
        caption: "Reflective journaling with tag filters, search, and reading estimations"
      },
      {
        url: "/projects/healthier-you/screen-2.jpg",
        title: "More Hub & Settings",
        caption: "Habits matrix, sleep tracker, relaxation tools, and reminder controls"
      }
    ],
    roadmap: {
      title: "What's Next: Clinical & Administrative Dashboard",
      description: "Extending the platform with an administrative dashboard for psychologists and mental-health professionals. The system aims to digitize traditional paperwork and monitoring workflows, bridging self-tracking with professional care while strictly prioritizing privacy and access controls.",
      items: [
        "Digital Patient Records — Centralize and organize patient histories and clinical profiles securely.",
        "Trend & Wellness Monitoring — Track longitudinal mood trends and behavioral indicators over time.",
        "Consent-Based Data Review — Review relevant journal logs and wellness assessments shared by clients.",
        "Automated Progress Tracking — Visualize therapeutic progress and reduce repetitive manual documentation.",
        "Privacy & Access Architecture — Implement end-to-end security, granular consent controls, and HIPAA-compliant data policies."
      ]
    },
    githubUrl: "https://github.com/Sumidson/"
  },
  {
    slug: "hostel-desk",
    title: "Hostel Desk",
    category: "Cloud-Based Hostel Management System",
    year: "2025",
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

