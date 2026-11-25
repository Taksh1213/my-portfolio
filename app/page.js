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
  FaBars,
  FaTimes,
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

const rolePhrases = [
  'MERN Stack Developer',
  'React & Next.js Developer',
  'Full-Stack Engineer',
  'BCA Student',
];

const skillItems = [
  { name: 'React.js', icon: <FaReact className="h-5 w-5 text-sky-500" />, category: 'frontend' },
  { name: 'Next.js', icon: <SiNextdotjs className="h-5 w-5 text-slate-100" />, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-5 w-5 text-cyan-500" />, category: 'frontend' },
  { name: 'Bootstrap', icon: <SiBootstrap className="h-5 w-5 text-purple-500" />, category: 'frontend' },
  { name: 'JavaScript', icon: <SiJavascript className="h-5 w-5 text-amber-500" />, category: 'frontend' },
  { name: 'HTML', icon: <SiHtml5 className="h-5 w-5 text-orange-500" />, category: 'frontend' },
  { name: 'React Icons', icon: <FaReact className="h-5 w-5 text-sky-500" />, category: 'frontend' },
  { name: 'Node.js', icon: <FaNodeJs className="h-5 w-5 text-emerald-500" />, category: 'backend' },
  { name: 'Express.js', icon: <SiExpress className="h-5 w-5 text-slate-200" />, category: 'backend' },
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
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const filteredProjects = projects.filter((project) =>
    activeProjectFilter === 'all' || project.category === activeProjectFilter
  );

  const filteredSkills = skillItems.filter((skill) =>
    activeSkillFilter === 'all' || skill.category === activeSkillFilter
  );

  return (
    <main className="min-h-screen transition-colors duration-300 bg-slate-950 text-slate-100">
      {/* Navbar */}
      <nav aria-label="Main navigation" className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 md:py-4 lg:px-10">
          <a href="#home" onClick={closeMenu} className="shrink-0 text-lg font-semibold tracking-tight text-white">
            Taksh Barot
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 transition hover:border-sky-400 hover:text-sky-400 ${theme === 'dark' ? 'text-amber-300' : 'text-slate-700'}`}
            >
              {theme === 'dark' ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100 transition hover:border-sky-400 hover:text-sky-400 md:hidden"
            >
              {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </button>
          </div>

          <div
            id="primary-navigation"
            className={`${menuOpen ? 'flex' : 'hidden'} w-full flex-col gap-1 border-t border-slate-800 pt-3 md:flex md:w-auto md:flex-row md:items-center md:gap-5 md:border-0 md:pt-0`}
          >
            <a href="#skills" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white">Skills</a>
            <a href="#projects" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white">Projects</a>
            <a href="#contact" onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white">Contact</a>
            <div className="flex gap-2 pt-2 md:pt-0">
              <a
                href="https://www.linkedin.com/in/taksh-barot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
              >
                <FaLinkedin aria-hidden="true" className="h-4 w-4 text-sky-400" /> LinkedIn
              </a>
              <a
                href="https://github.com/Taksh1213"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
              >
                <FaGithub aria-hidden="true" className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="scroll-mt-32 px-4 py-6 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-slate-900/80 p-5 sm:p-8 shadow-2xl shadow-slate-950/40 border border-white/10 backdrop-blur-xl transition-colors duration-300">
          <div className="grid gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="min-w-0 space-y-5 sm:space-y-6">
              <p className="break-words text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] sm:tracking-[0.3em] text-sky-400">
                <TypingEffect phrases={rolePhrases} />
              </p>

              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Hi, I’m <span className="text-sky-400">Taksh Barot</span>.
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                I build modern web apps with React.js, Next.js, Tailwind CSS, Node.js, Express, and MongoDB. I enjoy creating polished portfolio sites, dashboards, and full-stack solutions with smooth animations.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/resume"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 shadow-md shadow-sky-500/20"
                >
                  Download Resume
                </Link>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/90 px-6 py-3 text-sm text-slate-100 transition hover:border-sky-400 hover:text-sky-400 shadow-sm"
                >
                  Contact Me
                </a>

                <a
                  href="https://github.com/Taksh1213"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/90 px-6 py-3 text-sm text-slate-100 transition hover:border-sky-400 hover:text-sky-400 shadow-sm"
                >
                  <FaGithub className="h-4 w-4" /> View GitHub
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-5 sm:p-8 text-slate-300 shadow-inner animate-fade-left delay-150 transition-colors duration-300">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                What I build
              </p>

              <ul className="mt-4 grid gap-3 text-sm min-[390px]:grid-cols-2 sm:mt-6">
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-sm text-slate-300">
                  React.js apps with interactive UI
                </li>
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-sm text-slate-300">
                  Next.js landing pages and portfolios
                </li>
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-sm text-slate-300">
                  REST APIs with Node.js and Express
                </li>
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-sm text-slate-300">
                  MongoDB data storage and dashboards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-32 px-4 py-6 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-5 sm:p-8 shadow-xl shadow-slate-950/20 animate-fade-up transition-colors duration-300">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Skills</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Core technologies I use daily
                </h2>
              </div>

              <p className="max-w-2xl text-slate-400">
                I build React.js and Next.js experiences with Tailwind CSS. I also write backend code with Node.js, Express, and MongoDB for full-stack apps.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-800 pb-4">
              {['all', 'frontend', 'backend', 'database'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveSkillFilter(filter)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full uppercase tracking-wider transition ${
                    activeSkillFilter === filter
                      ? 'bg-sky-500 text-white shadow-sm'
                      : 'bg-slate-950 hover:bg-slate-800 text-slate-400'
                  }`}
                >
                  {filter === 'database' ? 'Databases' : filter}
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group rounded-3xl border border-slate-800 bg-slate-950/80 px-2.5 py-4 text-sm sm:px-5 sm:py-6 sm:text-base text-slate-200 transition hover:-translate-y-1 hover:border-sky-500 hover:bg-slate-900/95 shadow-sm"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="shrink-0 transition-transform group-hover:scale-110">{skill.icon}</span>
                    <span className="min-w-0 break-words font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-32 px-4 py-6 sm:px-6 sm:py-10 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-5 sm:p-8 shadow-xl shadow-slate-950/20 animate-fade-up transition-colors duration-300">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Projects</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Selected work</h2>
              </div>

              <p className="max-w-xl text-slate-400">
                These are the types of React and full-stack projects I enjoy building with polished interactions and clean UI.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-800 pb-4">
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
                      : 'bg-slate-950 hover:bg-slate-800 text-slate-400'
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
                  className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90 p-4 shadow-sm hover:shadow-md sm:p-6 transition duration-500 hover:-translate-y-1.5 hover:border-sky-500 hover:bg-slate-900/95 animate-fade-up"
                >
                  {project.image ? (
                    <div className="relative mb-5 aspect-video overflow-hidden rounded-3xl bg-slate-900/90 shadow-inner border border-transparent">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  ) : null}

                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-slate-400">{project.description}</p>

                  {project.github || project.liveDemo ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400 shadow-sm"
                        >
                          <FaGithub className="h-4 w-4" /> View on GitHub
                        </a>
                      ) : null}

                      {project.liveDemo ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400 shadow-sm"
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
      <section id="contact" className="scroll-mt-32 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-10 lg:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-800 bg-slate-900/80 p-5 sm:p-8 shadow-xl shadow-slate-950/20 animate-fade-up transition-colors duration-300">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Let’s start your next React project.
          </h2>
          <p className="mt-4 max-w-xl text-slate-400 leading-7">
            I’m available for freelance work, portfolio updates, and full-stack web app development. Reach out by email, WhatsApp, or LinkedIn.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-slate-300">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=takshbarot38@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              title="Email: takshbarot38@gmail.com"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-900/80 border border-slate-800 hover:text-white hover:bg-sky-500 transition shadow-sm"
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
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-900/80 border border-slate-800 text-sky-400 hover:bg-slate-800 transition shadow-sm"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>

            <a
              href="https://github.com/Taksh1213"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-900/80 border border-slate-800 text-slate-100 hover:bg-slate-800 transition shadow-sm"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950/95 px-6 py-8 text-center">
        <p className="text-sm font-semibold text-slate-100">Taksh Barot</p>
        <nav aria-label="Footer navigation" className="mt-3 flex justify-center gap-4 text-sm text-slate-400">
          <a href="#home" className="transition hover:text-white">
            Home
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
        <p className="mt-5 text-xs text-slate-500">
          © 2026 Taksh Barot. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
