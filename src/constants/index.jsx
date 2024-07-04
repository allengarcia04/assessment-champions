import { Handshake } from "lucide-react";
import { Hammer } from "lucide-react";
import { HardHat } from "lucide-react";
import { BrickWall } from "lucide-react";
import { ChefHat } from "lucide-react";
import { Cpu } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Pricing", href: "pricing" },
  { label: "Testimonials", href: "testimonials" },
];

export const testimonials = [
  {
    user: "Alejandro Gómez",
    company: "Diploma in Leadership and Management",
    image: user1,
    text: "As a student juggling work and studies, the support from Assessment Champions has been invaluable. The leadership assessments were meticulously crafted, reflecting current industry standards. Thank you for helping me achieve academic success!",
  },
  {
    user: "Wei Li",
    company: "Certificate III in Carpentry",
    image: user2,
    text: "The carpentry assessments provided by this service were exceptionally precise. Detailed diagrams and clear explanations effectively simplified complex concepts, greatly enriching my learning experience.  Assessment champions has helped in ensuring my academic success!",
  },
  {
    user: "David Johnson",
    company: "Certificate III in Cookery",
    image: user3,
    text:  "I relied on Assessment Champions for my cookery assessments, and they exceeded my expectations. The essays and practical evaluations were thorough and well-researched, enhancing my learning experience. Highly recommended for international students! "
    ,
  },
  {
    user: "Rajesh Patel",
    company: "Bachelors in Information Technology",
    image: user4,
    text: "Being an international student balancing work and studies, the help from Assessment Champions  has been priceless. The support I received for my IT assignments was outstanding and meticulously tailored. Thank you AC!"
,
  },
  {
    user: "Michael Smith",
    company: "Certificate IV in Building and Construction",
    image: user5,
    text: "The dissertations and project reports provided were top-notch. They demonstrated a deep understanding of construction principles and practices. I'm grateful for the quality work and professional service!",
  },
  {
    user: "Emily Nguyen",
    company: "Advanced Diploma in Civil Construction Design",
    image: user6,
    text: "I'm incredibly impressed with the detailed approach and expertise shown in my construction design assessments. The team ensured every requirement was met, helping me excel in my studies. Highly recommended!",
  },
];

export const features = [
  {
    icon: <Handshake />,
    text: "Leadership and Management",
    description:
      "In-depth assessments for leadership and management courses, focusing on strategic thinking and leadership skills.",
  },
  {
    icon: <HardHat />,
    text: "Civil Construction Design",
    description:
      "Specialized assessments for civil construction design courses, ensuring you meet the highest standards in your projects.",
  },
  {
    icon: <BrickWall />,
    text: "Building and Construction",
    description:
      "Comprehensive assessments for building construction courses, covering all necessary technical aspect",
  },
  {
    icon: <Hammer />,
    text: "Carpentry",
    description:
      "Expertly crafted assessments for carpentry courses to ensure you meet all academic requirements.",
  },
  {
    icon: <ChefHat />,
    text: "Cookery and Hospitality",
    description:
      "High-quality assessments for cookery courses, helping you showcase your culinary skills and knowledge.",
  },
  {
    icon: <Cpu />,
    text: "IT Related Courses",
    description:
      "Detailed IT assessments, including coding, database management, and system analysis projects.",
  },
];

export const checklistItems = [
  {
    title: "100% Money-Back Guarantee",
    description:
      "We stand by the quality of our work. If you do not receive competency or passing marks, we offer a full refund.",
  },
  {
    title: "Tailor-Crafted and Plagiarism-Free",
    description:
      "Our assessments are customized to meet your specific requirements,  we guarantee 100% original work, ensuring your assessments are unique.",
  },
  {
    title: "On-Time Delivery",
    description:
      "We understand the importance of deadlines. Our team guarantees timely delivery of your assessments, every time.",
  },
  {
    title: "Expert Writers",
    description:
      "Our team consists of seasoned writers with specialized knowledge in various academic fields, ensuring top-notch content.",
  },
];

export const pricingOptions = [
  {
    title: "Certificate I to Certificate IV Courses",
    price: "$49 - $99",
    features: [
      "Perfect for students pursuing Certificate I to Certificate IV qualifications. Our services cover a broad range of assessment types, including practical tasks, written assignments, and projects. Pricing varies based on the specific requirements, complexity of the assessment, and the urgency of the deadline. Get high-quality, tailored assessments to help you achieve your academic goals efficiently and affordably.",
    ],
  },
  {
    title: "Diplomas and Advanced Diplomas",
    price: "$99 - $149",
    features: [
      "For students enrolled in Diploma and Advanced Diploma programs, whether you need help with detailed reports, in-depth research papers, or complex projects, we provide customized solutions that cater to your academic needs. Pricing varies based on the specific requirements, complexity of the assessment, and the urgency of the deadline. Get high-quality, tailored assessments to help you achieve your academic goals efficiently and affordably.",

    ],
  },
  {
    title: "Bachelors and Masters Courses",
    price: "$149 - $199",
    features: [
      "Ideal for students seeking support with their Bachelor's or Master's degree assessments. This pricing option covers a wide range of academic work, from essays and research papers to case studies and final year projects. We understand the higher expectations and standards at this level, and our expert writers are equipped to deliver top-quality, original work tailored to your course requirements. Prices are determined by the assessment's complexity, specific requirements, and the urgency of the deadline.",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Email: assessmentchampions@gmail.com" },
  { href: "#", text: "Mobile: 0426 381 120" },
];




