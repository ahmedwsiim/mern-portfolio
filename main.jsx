/*
MERN Portfolio for Muhammad Ahmad
- React + Tailwind + Framer Motion
- Docker-ready
- Azure deployable
*/

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import {
  SiDocker, SiKubernetes, SiMongodb, SiReact, SiNodedotjs, SiGit,
  SiLinux, SiOracle, SiGooglecloud, SiPostman, SiCoursera, SiAtlassian
} from 'react-icons/si';

export default function Portfolio() {
  useEffect(() => {
    document.title = 'Ahmad Wasim | DevOps Engineer';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold"
        >
          Muhammad Ahmad
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl mt-4 text-gray-600 dark:text-gray-300"
        >
          DevOps Engineer | Cloud Enthusiast
        </motion.p>
        <motion.a
          href="https://example.com/muhammad_ahmad_resume.pdf"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-black text-white py-3 px-8 rounded-lg shadow hover:bg-gray-800 transition"
        >
          Download Resume
        </motion.a>
      </section>

      {/* Tech Stack Slider */}
      <section className="overflow-hidden py-10 bg-white dark:bg-gray-800">
        <div className="whitespace-nowrap animate-marquee flex gap-12 justify-center items-center text-4xl text-gray-600 dark:text-gray-300">
          <div title="Docker"><SiDocker /></div>
          <div title="Kubernetes"><SiKubernetes /></div>
          <div title="MongoDB"><SiMongodb /></div>
          <div title="React"><SiReact /></div>
          <div title="Node.js"><SiNodedotjs /></div>
          <div title="Git"><SiGit /></div>
          <div title="Linux"><SiLinux /></div>
          <div title="Oracle"><SiOracle /></div>
          <div title="Google Cloud"><SiGooglecloud /></div>
          <div title="Postman"><SiPostman /></div>
          <div title="Coursera"><SiCoursera /></div>
          <img src="https://cdn-icons-png.flaticon.com/512/888/888839.png" alt="IBM" title="IBM" className="w-10 h-10" />
          <div title="Atlassian"><SiAtlassian /></div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="px-8 py-20 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-900 border rounded-lg shadow-md"
            >
              <div className="text-5xl mb-4 text-blue-600 dark:text-blue-400">{cert.icon}</div>
              <p className="font-semibold mb-1">{cert.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-20 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border border-gray-300 dark:border-gray-700 p-6 rounded-xl shadow-lg bg-white dark:bg-gray-900"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="mb-5 text-base text-gray-600 dark:text-gray-300">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="text-blue-600 hover:underline text-base"
              >
                View Project ↗
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-24 bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gray-100 dark:bg-gray-800 p-10 rounded-xl shadow-lg"
        >
          <p className="text-xl italic mb-6 text-gray-700 dark:text-gray-300">
            "Ahmad Wasim is a dedicated, quick learner who brings strong cloud and DevOps skills to every project. His passion for learning is evident in the way he takes initiative and delivers with reliability."
          </p>
          <p className="text-lg font-semibold">Shaheera Malik</p>
          <p className="text-sm text-gray-500">Software Engineer | MERN Stack Developer</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-24 text-center bg-white dark:bg-gray-900">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">Let's work together — reach out to me via email or GitHub.</p>
        <div className="flex justify-center gap-8 text-3xl">
          <a href="mailto:ahmad@example.com" className="hover:text-blue-500"><FaEnvelope /></a>
          <a href="https://github.com/ahmedwsiim" target="_blank" className="hover:text-blue-500"><FaGithub /></a>
        </div>
      </section>
    </div>
  );
}

const certifications = [
  {
    title: 'Intro to Containers',
    issuer: 'IBM',
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/873/873107.png"
        alt="IBM Logo"
        className="w-10 h-10"
      />
    ),
  },
  {
    title: 'API Fundamentals',
    issuer: 'Postman',
    icon: <SiPostman />,
  },
  {
    title: 'OCI Foundations (2024)',
    issuer: 'Oracle',
    icon: <SiOracle />,
  },
  {
    title: 'Cloud Security Principles',
    issuer: 'Google Cloud',
    icon: <SiGooglecloud />,
  },
  {
    title: 'Risk Mgmt in Cloud',
    issuer: 'Google Cloud',
    icon: <SiGooglecloud />,
  },
  {
    title: 'Cloud Infra Core',
    issuer: 'Google',
    icon: <SiGooglecloud />,
  },
  {
    title: 'Starting with Docker',
    issuer: 'Coursera',
    icon: <SiCoursera />,
  },
  {
    title: 'Cybersecurity Vulnerabilities',
    issuer: 'US Homeland Security',
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
        alt="USA Flag"
        className="w-10 h-10"
      />
    ),
  },
  {
    title: 'Cybersecurity in IT/ICS',
    issuer: 'US Homeland Security',
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
        alt="USA Flag"
        className="w-10 h-10"
      />
    ),
  },
  {
    title: 'Version Control with Git',
    issuer: 'Atlassian',
    icon: <SiAtlassian />,
  },
];



const projects = [
  {
    title: 'Automated CI/CD Pipeline for Dockerized Full-Stack Movie Recommendation System',
    description:
      'Designed and deployed a FastAPI + Streamlit movie recommender with GitHub Actions CI/CD, Docker Compose orchestration, and Azure VM deployment.',
    link: 'https://github.com/ahmedwsiim/movie-recommender',
  },
  {
    title: 'Docker-Orchestrated Full-Stack Notes Platform',
    description:
      'Developed a secure MERN stack notes app with JWT auth, NGINX reverse proxy, TailwindCSS UI, and full Dockerization with Compose.',
    link: 'https://github.com/ahmedwsiim/notes-platform',
  },
  {
    title: 'Retrieval-Augmented Generation (RAG) Intelligent Query Bot',
    description:
      'Led development of a GPT-powered RAG bot to query admission docs using LangChain, FAISS, and OpenAI APIs with semantic search via Quadrant.',
    link: 'https://github.com/ahmedwsiim/rag-bot',
  },
  {
    title: 'More Hands – Cross-Platform Charity App',
    description:
      'Built a React Native & Firebase donation platform with animated UI, real-time sync, auth integration, and donation tracking.',
    link: 'https://github.com/ahmedwsiim/more-hands',
  },
  {
    title: '4-Bit Arithmetic Logic Unit (ALU)',
    description:
      'Designed a 4-bit ALU using Arduino Uno and logic gate ICs (7408, 7432, etc.), with breadboard prototyping and LED I/O indicators.',
    link: 'https://github.com/ahmedwsiim/alu',
  },
];
