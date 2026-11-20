'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaWhatsapp,
  FaSun,
  FaMoon,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiPhp,
  SiMysql,
  SiBootstrap,
} from 'react-icons/si';
import { useTheme } from './components/ThemeProvider';
import TypingEffect from './components/TypingEffect';

const skillItems = [
  { name: 'React.js', icon: <FaReact className="h-5 w-5 text-sky-500" />, category: 'frontend' },
  { name: 'Next.js', icon: <SiNextdotjs className="h-5 w-5 text-slate-800 dark:text-slate-100" />, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-5 w-5 text-cyan-500" />, category: 'frontend' },
  { name: 'Bootstrap', icon: <SiBootstrap className="h-5 w-5 text-purple-500" />, category: 'frontend' },
  { name: 'JavaScript', icon: <SiJavascript className="h-5 w-5 text-amber-500" />, category: 'frontend' },
  { name: 'HTML', icon: <SiHtml5 className="h-5 w-5 text-orange-500" />, category: 'frontend' },
  { name: 'React Icons', icon: <FaReact className="h-5 w-5 text-sky-500" />, category: 'frontend' },
  { name: 'Node.js', icon: <FaNodeJs className="h-5 w-5 text-emerald-500" />, category: 'backend' },
  { name: 'Express.js', icon: <SiExpress className="h-5 w-5 text-slate-700 dark:text-slate-200" />, category: 'backend' },
  { name: 'PHP', icon: <SiPhp className="h-5 w-5 text-violet-500" />, category: 'backend' },
  { name: 'MongoDB', icon: <SiMongodb className="h-5 w-5 text-emerald-600" />, category: 'database' },
  { name: 'MySQL', icon: <SiMysql className="h-5 w-5 text-blue-600" />, category: 'database' },
];

const projects = [
  {
    title: 'Freshify — Online Grocery Store',
    description: 'A full-stack grocery store built with ASP.NET Core MVC, C#, Entity Framework Core, SQL Server, and Bootstrap. Customers can browse groceries, manage their cart, and place cash-on-delivery orders. The admin dashboard manages products, categories, orders, payments, and reviews.',
    image: '/images/freshify.png',
    github: 'https://github.com/Taksh1213/Freshify',
    category: 'fullstack',
  },
  {
    title: 'Weather Dashboard',
    description: 'Frontend built with React.js, backend with Node.js and Express. Features live weather forecasts using weather API and live news updates with news API. Includes responsive design, live search, animated weather cards, and mobile-friendly UI.',
    image: '/images/weather-dashboard.webp',
    github: 'https://github.com/Taksh1213/weather-dashboard',
    category: 'frontend',
  },
  {
    title: 'Expense Tracker',
    description: 'Backend built with Node.js, Express.js, MongoDB, and cookies for session management. Frontend developed with Next.js, CSS, and Tailwind CSS. Users can create profiles, track income and expenses, view real-time charts, analyze spending patterns, and see detailed expense analytics.',
    image: '/images/expense-tracker.webp',
    github: 'https://github.com/Taksh1213/expense-tracker-frontend',
    liveDemo: 'https://expense-tracker-taksh.vercel.app/',
    category: 'fullstack',
  },
  {
    title: 'Hotel Management System',
    description: 'Full-stack MERN app with Node.js, Express.js, MongoDB backend and Next.js frontend. Features admin panel with complete CRUD operations for hotel management. User dashboard for browsing and booking hotels. Integrated Stripe API for secure online payment processing and booking confirmation.',
    image: '/images/hotel-managment.webp',
    github: 'https://github.com/Taksh1213/hotel-frontend',
    liveDemo: 'https://luxstay-hotels.vercel.app/',
    category: 'fullstack',
  },
  {
    title: 'My Portfolio',
    description: 'Personal portfolio website built with Next.js and Tailwind CSS. Showcases skills, projects, contact options, and live deployment on Vercel. Includes animated sections, icon-based contact links, and a responsive design.',
    image: '/images/portfolio.webp',
    github: 'https://github.com/Taksh1213/my-portfolio',
    liveDemo: 'https://taksh-dev.vercel.app/',
    category: 'frontend',
  },
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');
  const [activeSkillFilter, setActiveSkillFilter] = useState('all');

  const filteredProjects = projects.filter((project) =>
    activeProjectFilter === 'all' || project.category === activeProjectFilter
  );

  const filteredSkills = skillItems.filter((skill) =>
    activeSkillFilter === 'all' || skill.category === activeSkillFilter
  );

  return (
    <main className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-30 border-b border-slate-200/80 dark:border-slate-800/70 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#home" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            Taksh Barot
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-6 md:flex">
              <a href="#skills" className="text-sm font-medium text-slate-600 dark:text-slate-300 transition hover:text-sky-500 dark:hover:text-white">
                Skills
              </a>
              <a href="#projects" className="text-sm font-medium text-slate-600 dark:text-slate-300 transition hover:text-sky-500 dark:hover:text-white">
                Projects
              </a>
              <a href="#contact" className="text-sm font-medium text-slate-600 dark:text-slate-300 transition hover:text-sky-500 dark:hover:text-white">
                Contact
              </a>
              <a
                href="https://www.linkedin.com/in/taksh-barot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/80 px-4 py-2 text-sm text-slate-700 dark:text-slate-100 transition hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400"
              >
                <FaLinkedin className="h-4 w-4 text-sky-500 dark:text-sky-400" /> LinkedIn
              </a>
              <a
                href="https://github.com/Taksh1213"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/80 px-4 py-2 text-sm text-slate-700 dark:text-slate-100 transition hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400"
              >
                <FaGithub className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="overflow-hidden px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white/70 dark:bg-slate-900/80 p-8 shadow-xl dark:shadow-2xl shadow-slate-200/50 dark:shadow-slate-950/40 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl transition-colors duration-300">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 animate-fade-right">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-400">
                <TypingEffect phrases={['MERN Stack Developer', 'React & Next.js Developer', 'Full-Stack Engineer', 'BCA Student']} />
              </p>

              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Hi, I’m <span className="text-sky-500 dark:text-sky-400">Taksh Barot</span>.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                I build modern web apps with React.js, Next.js, Tailwind CSS, Node.js, Express, and MongoDB. I enjoy creating polished portfolio sites, dashboards, and full-stack solutions with smooth animations.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/resume"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 shadow-md shadow-sky-500/20"
                >
                  Download Resume
                </Link>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/90 px-6 py-3 text-sm text-slate-700 dark:text-slate-100 transition hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400 shadow-sm"
                >
                  Contact Me
                </a>

                <a
                  href="https://github.com/Taksh1213"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/90 px-6 py-3 text-sm text-slate-700 dark:text-slate-100 transition hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400 shadow-sm"
                >
                  <FaGithub className="h-4 w-4" /> View GitHub
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/90 p-8 text-slate-600 dark:text-slate-300 shadow-inner animate-fade-left delay-150 transition-colors duration-300">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                What I build
              </p>

              <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                <li className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-4 py-4 shadow-sm text-slate-700 dark:text-slate-300">
                  React.js apps with interactive UI
                </li>
                <li className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-4 py-4 shadow-sm text-slate-700 dark:text-slate-300">
                  Next.js landing pages and portfolios
                </li>
                <li className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-4 py-4 shadow-sm text-slate-700 dark:text-slate-300">
                  REST APIs with Node.js and Express
                </li>
                <li className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-4 py-4 shadow-sm text-slate-700 dark:text-slate-300">
                  MongoDB data storage and dashboards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-8 shadow-lg dark:shadow-xl shadow-slate-200/50 dark:shadow-slate-950/20 animate-fade-up transition-colors duration-300">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-400">Skills</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                  Core technologies I use daily
                </h2>
              </div>

              <p className="max-w-2xl text-slate-600 dark:text-slate-400">
                I build React.js and Next.js experiences with Tailwind CSS. I also write backend code with Node.js, Express, and MongoDB for full-stack apps.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
              {['all', 'frontend', 'backend', 'database'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveSkillFilter(filter)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full uppercase tracking-wider transition ${
                    activeSkillFilter === filter
                      ? 'bg-sky-500 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {filter === 'database' ? 'Databases' : filter}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 px-5 py-6 text-slate-750 dark:text-slate-200 transition hover:-translate-y-1 hover:border-sky-500 hover:bg-white dark:hover:bg-slate-900/95 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="transition-transform group-hover:scale-110">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-8 shadow-lg dark:shadow-xl shadow-slate-200/50 dark:shadow-slate-950/20 animate-fade-up transition-colors duration-300">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-400">Projects</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Selected work</h2>
              </div>

              <p className="max-w-xl text-slate-600 dark:text-slate-400">
                These are the types of React and full-stack projects I enjoy building with polished interactions and clean UI.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'fullstack', label: 'Full-Stack' },
                { id: 'frontend', label: 'Frontend / React' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveProjectFilter(tab.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full uppercase tracking-wider transition ${
                    activeProjectFilter === tab.id
                      ? 'bg-sky-500 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {filteredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/90 p-6 shadow-sm hover:shadow-md transition duration-500 hover:-translate-y-1.5 hover:border-sky-500 hover:bg-white dark:hover:bg-slate-900/95 animate-fade-up"
                >
                  {project.image ? (
                    <div className="relative mb-6 h-44 overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900/90 shadow-inner border border-slate-200 dark:border-transparent">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  ) : null}

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-3 text-slate-600 dark:text-slate-400">{project.description}</p>

                  {project.github || project.liveDemo ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-750 dark:text-slate-100 transition hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400 shadow-sm"
                        >
                          <FaGithub className="h-4 w-4" /> View on GitHub
                        </a>
                      ) : null}

                      {project.liveDemo ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-750 dark:text-slate-100 transition hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400 shadow-sm"
                        >
                          <FaExternalLinkAlt className="h-4 w-4" /> Live Demo
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 pb-16 pt-10 sm:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-8 shadow-lg dark:shadow-xl shadow-slate-200/50 dark:shadow-slate-950/20 animate-fade-up transition-colors duration-300">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500 dark:text-sky-400">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
            Let’s start your next React project.
          </h2>
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400 leading-7">
            I’m available for freelance work, portfolio updates, and full-stack web app development. Reach out by email, WhatsApp, or LinkedIn.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-300">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=takshbarot38@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              title="Email: takshbarot38@gmail.com"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-850 hover:bg-sky-500 hover:text-white dark:hover:bg-sky-500 transition shadow-sm"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>

            <a
              href="https://wa.me/919904084040"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp: +91 9904084040"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-600 text-white border border-green-700 hover:bg-green-500 transition shadow-md"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/taksh-barot"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-850 text-sky-500 dark:text-sky-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition shadow-sm"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>

            <a
              href="https://github.com/Taksh1213"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-850 text-slate-700 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 transition shadow-sm"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
     <footer className="border-t border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 py-8 transition-colors duration-300">
  <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center text-sm text-slate-500 sm:px-10">
    <p>Taksh Barot</p>

    <div className="flex items-center justify-center gap-4">
      <a
        href="#home"
        className="text-slate-500 dark:text-slate-400 transition hover:text-sky-500 dark:hover:text-white"
      >
        Home
      </a>
      <a
        href="#contact"
        className="text-slate-500 dark:text-slate-400 transition hover:text-sky-500 dark:hover:text-white"
      >
        Contact
      </a>
    </div>
  </div>
</footer>
    </main>
  );
}