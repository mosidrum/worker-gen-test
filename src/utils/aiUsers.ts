import { StaticImageData } from "next/image";
import one from "../../public/assets/user1.jpg";
import two from "../../public/assets/user2.jpg";
import three from "../../public/assets/user3.jpg";
import four from "../../public/assets/user4.jpg";
import five from "../../public/assets/user5.jpg";

export type AIUser = {
  id: number;
  name: string;
  title: string;
  currentTask: string;
  values: string[];
  qualities: string[];
  about: string;
  image: StaticImageData;
};

export const aiUsers: AIUser[] = [
  {
    id: 1,
    name: "Sophia Martinez",
    title: "CEO, Meta Foundation International",
    currentTask:
      "Prepare for a high-volume sales intent meeting on Zoom by 2 PM regarding upgrading the service contract.",
    values: ["Decision Maker", "Visionary Leader", "Change Driver"],
    qualities: [
      "Sophia has a proven track record of transforming organizations into market leaders.",
      "She excels in developing strategic partnerships and driving innovation.",
      "Her strong communication skills inspire and mobilize teams effectively.",
      "Sophia's ability to anticipate market trends ensures the company's sustainability and growth.",
    ],
    about:
      "Sophia is a visionary leader with over 15 years of experience steering global organizations toward sustainable growth and innovation.",
    image: one,
  },
  {
    id: 2,
    name: "Liam Johnson",
    title: "Chief Marketing Officer, BrightWave Technologies",
    currentTask:
      "Draft a comprehensive marketing campaign strategy for a product launch in Q1 2025.",
    values: ["Expert Marketer", "Brand Builder", "Creative Thinker"],
    qualities: [
      "Liam specializes in crafting impactful marketing campaigns that deliver measurable results.",
      "He has a unique ability to merge creativity with data to drive brand growth.",
      "His exceptional networking skills foster collaboration across departments and industries.",
      "Liam's dedication to customer insights ensures campaigns resonate with target audiences.",
    ],
    about:
      "Liam is a marketing powerhouse with a knack for creating memorable campaigns that elevate brands to new heights.",
    image: two,
  },
  {
    id: 3,
    name: "Olivia Chen",
    title: "Lead Engineer, Nexus Robotics",
    currentTask:
      "Conduct system diagnostics and prepare a presentation on integrating AI with robotic systems for the board meeting.",
    values: ["Innovative Thinker", "Problem Solver", "Team Mentor"],
    qualities: [
      "Olivia is renowned for her ability to simplify complex engineering problems.",
      "She consistently delivers innovative solutions that drive technological advancement.",
      "Her mentorship has helped nurture the next generation of engineers at Nexus Robotics.",
      "Olivia’s contributions to AI integration have set industry benchmarks.",
    ],
    about:
      "Olivia is a trailblazing engineer who blends technical expertise with a passion for innovation, shaping the future of robotics.",
    image: three,
  },
  {
    id: 4,
    name: "Ethan Patel",
    title: "Head of Sales, Quantum Innovations",
    currentTask:
      "Analyze quarterly sales data and strategize on improving client retention rates during tomorrow's leadership meeting.",
    values: ["Sales Strategist", "Data-Driven Leader", "Growth Enabler"],
    qualities: [
      "Ethan has a deep understanding of market dynamics and client psychology.",
      "His leadership has consistently driven record-breaking revenue growth.",
      "He fosters strong, trust-based relationships with clients to ensure long-term partnerships.",
      "Ethan’s data-driven approach ensures informed decision-making and sustained growth.",
    ],
    about:
      "Ethan is a results-oriented sales leader who combines strategic thinking with an unwavering commitment to client success.",
    image: four,
  },
  {
    id: 5,
    name: "Ava Thompson",
    title: "COO, Stellar Health Systems",
    currentTask:
      "Oversee the implementation of a new healthcare operations system to streamline workflows and improve patient outcomes.",
    values: ["Operational Expert", "Team Leader", "Efficiency Maximizer"],
    qualities: [
      "Ava is a seasoned operations professional with a knack for identifying inefficiencies.",
      "She excels in leading cross-functional teams to execute complex projects seamlessly.",
      "Her strategic planning ensures smooth transitions during organizational change.",
      "Ava’s focus on patient-centric care has transformed Stellar Health's reputation in the industry.",
    ],
    about:
      "Ava is a dynamic operational leader who leverages her expertise to drive efficiency and innovation in healthcare systems.",
    image: five,
  },
];
