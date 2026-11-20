'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaWhatsapp,
} from 'react-icons/fa';
import {
  SiBootstrap,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiTailwindcss,
} from 'react-icons/si';
import TypingEffect from './components/TypingEffect';

const rolePhrases = [
  'MERN Stack Developer',
  'React & Next.js Developer',
  'Full-Stack Engineer',
  'BCA Student',
];

const githubProfile = 'https://github.com/Taksh1213';
const linkedinProfile = 'https://www.linkedin.com/in/taksh-barot';

const navigation = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const skillItems = [
  { name: 'React.js', icon: FaReact, color: 'text-teal-400', category: 'frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-neutral-100', category: 'frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400', category: 'frontend' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-400', category: 'frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-amber-400', category: 'frontend' },
  { name: 'HTML', icon: SiHtml5, color: 'text-orange-400', category: 'frontend' },
  { name: 'React Icons', icon: FaReact, color: 'text-teal-400', category: 'frontend' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-emerald-400', category: 'backend' },
  { name: 'Express.js', icon: SiExpress, color: 'text-neutral-200', category: 'backend' },
  { name: 'PHP', icon: SiPhp, color: 'text-violet-400', category: 'backend' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-400', category: 'database' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-400', category: 'database' },
];

const projects = [
  {
    title: 'Freshify — Online Grocery Store',
    description:
      'A full-stack grocery store built with ASP.NET Core MVC, C#, Entity Framework Core, SQL Server, and Bootstrap. Customers can browse groceries, manage their cart, and place cash-on-delivery orders. The admin dashboard manages products, categories, orders, payments, and reviews.',
    image: '/images/freshify.png',
    github: `${githubProfile}/Freshify`,
    category: 'fullstack',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Frontend built with React.js, backend with Node.js and Express. Features live weather forecasts and news updates, live search, animated weather cards, and a mobile-friendly layout.',
    image: '/images/weather-dashboard.webp',
    github: `${githubProfile}/weather-dashboard`,
    category: 'frontend',
  },
  {
    title: 'Expense Tracker',
    description:
      'Built with Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB, with cookies for session management. Users can create profiles, track income and expenses, and analyze spending through charts and detailed reports.',
    image: '/images/expense-tracker.webp',
    github: `${githubProfile}/expense-tracker-frontend`,
    liveDemo: 'https://expense-tracker-taksh.vercel.app/',
    category: 'fullstack',
  },
  {
    title: 'Hotel Management System',
    description:
      'Full-stack MERN app with a Next.js frontend. The admin panel manages hotel listings, and the customer dashboard supports browsing, bookings, Stripe payments, and booking confirmation.',
    image: '/images/hotel-managment.webp',
    github: `${githubProfile}/hotel-frontend`,
    liveDemo: 'https://luxstay-hotels.vercel.app/',
    category: 'fullstack',
  },
  {
    title: 'My Portfolio',
    description:
      'Personal portfolio built with Next.js and Tailwind CSS. It showcases my skills, projects, resume, and contact details in a responsive layout.',
    image: '/images/portfolio.webp',
    github: `${githubProfile}/my-portfolio`,
    liveDemo: 'https://taksh-dev.vercel.app/',
    category: 'frontend',
  },
];

const skillFilters = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Databases' },
];

const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'frontend', label: 'Frontend / React' },
];

const services = [
  'React.js apps with interactive UI',
  'Next.js landing pages and portfolios',
  'REST APIs with Node.js and Express',
  'MongoDB data storage and dashboards',
];

const contacts = [
  {
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=takshbarot38@gmail.com',
    icon: FaEnvelope,
  },
  { label: 'WhatsApp', href: 'https://wa.me/919904084040', icon: FaWhatsapp },
  { label: 'LinkedIn', href: linkedinProfile, icon: FaLinkedin },
  { label: 'GitHub', href: githubProfile, icon: FaGithub },
];

const panelClass =
  'rounded-[2rem] border border-neutral-700 bg-[#202528] p-5 shadow-xl shadow-black/20 sm:p-8';

const textLinkClass = 'transition hover:text-teal-300';

const actionLinkClass =
  'inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-700 bg-[#252a2d] px-6 py-3 text-sm font-semibold text-neutral-100 transition hover:border-teal-400 hover:text-teal-300';

const projectLinkClass =
  'inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm font-semibold text-neutral-100 transition hover:border-teal-400 hover:text-teal-300';

function FilterButtons({ label, options, active, onChange }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="mt-8 flex flex-wrap gap-2 border-b border-neutral-700 pb-4"
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={active === option.id}
          onClick={() => onChange(option.id)}
          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
            active === option.id
              ? 'bg-teal-300 text-neutral-950'
              : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-700'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [activeProjectFilter, setActiveProjectFilter] = useState('all');
  const [activeSkillFilter, setActiveSkillFilter] = useState('all');

  const filteredProjects = projects.filter(
    (project) =>
      activeProjectFilter === 'all' || project.category === activeProjectFilter
  );

  const filteredSkills = skillItems.filter(
    (skill) => activeSkillFilter === 'all' || skill.category === activeSkillFilter
  );

  return (
    <div className="min-h-screen bg-[#181c1e] text-neutral-100 [color-scheme:dark]">
      <header className="sticky top-0 z-30 border-b border-neutral-700 bg-[#181c1e]/95 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3 sm:px-10 sm:py-4"
        >
          <a href="#home" className="shrink-0 font-semibold tracking-tight text-white sm:text-lg">
            Taksh Barot
          </a>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-neutral-300 sm:gap-x-6">
            {navigation.map(({ label, href }) => (
              <a key={href} href={href} className={`py-2 ${textLinkClass}`}>
                {label}
              </a>
            ))}

            <a
              href={linkedinProfile}
              target="_blank"
              rel="noreferrer"
              className={`hidden md:inline-flex ${projectLinkClass}`}
            >
              <FaLinkedin className="h-4 w-4 text-teal-400" aria-hidden="true" />
              LinkedIn
            </a>

            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className={`hidden md:inline-flex ${projectLinkClass}`}
            >
              <FaGithub className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="scroll-mt-28 px-4 py-8 sm:px-10 sm:py-10">
          <div className={`mx-auto max-w-6xl ${panelClass}`}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <div className="min-w-0 space-y-6">
                <p className="break-words text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-teal-300">
                  <TypingEffect phrases={rolePhrases} />
                </p>

                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Hi, I’m <span className="text-teal-400">Taksh Barot</span>.
                </h1>

                <p className="max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                  I build modern web apps with React.js, Next.js, Tailwind CSS,
                  Node.js, Express, and MongoDB. I enjoy creating polished
                  portfolio sites, dashboards, and full-stack solutions with
                  smooth animations.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/resume"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-teal-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-teal-200"
                  >
                    Download Resume
                  </Link>

                  <a href="#contact" className={actionLinkClass}>
                    Contact Me
                  </a>

                  <a
                    href={githubProfile}
                    target="_blank"
                    rel="noreferrer"
                    className={actionLinkClass}
                  >
                    <FaGithub className="h-4 w-4" aria-hidden="true" />
                    View GitHub
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-700 bg-[#252a2d] p-5 sm:p-8">
                <h2 className="text-sm font-semibold text-neutral-100">What I build</h2>

                <ul className="mt-4 grid gap-3 text-sm text-neutral-300 sm:grid-cols-2">
                  {services.map((service) => (
                    <li
                      key={service}
                      className="rounded-2xl border border-neutral-700 bg-[#202528] px-4 py-4"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 px-4 py-8 sm:px-10 sm:py-10">
          <div className={`mx-auto max-w-6xl ${panelClass}`}>
            <h2 className="text-3xl font-semibold text-white">Technical Skills</h2>

            <FilterButtons
              label="Filter skills"
              options={skillFilters}
              active={activeSkillFilter}
              onChange={setActiveSkillFilter}
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {filteredSkills.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-2xl border border-neutral-700 bg-[#252a2d] px-5 py-5 text-neutral-200 transition hover:border-teal-500"
                >
                  <Icon className={`h-5 w-5 shrink-0 ${color}`} aria-hidden="true" />
                  <span className="font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 px-4 py-8 sm:px-10 sm:py-10">
          <div className={`mx-auto max-w-6xl ${panelClass}`}>
            <h2 className="text-3xl font-semibold text-white">Selected Work</h2>

            <FilterButtons
              label="Filter projects"
              options={projectFilters}
              active={activeProjectFilter}
              onChange={setActiveProjectFilter}
            />

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {filteredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-neutral-700 bg-[#252a2d] p-4 transition hover:border-teal-500 sm:p-6"
                >
                  <div className="relative mb-5 aspect-video overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-neutral-300">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={projectLinkClass}
                    >
                      <FaGithub className="h-4 w-4" aria-hidden="true" />
                      View on GitHub
                    </a>

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className={projectLinkClass}
                      >
                        <FaExternalLinkAlt className="h-4 w-4" aria-hidden="true" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 px-4 pb-16 pt-8 sm:px-10">
          <div className={`mx-auto max-w-6xl ${panelClass}`}>
            <h2 className="text-3xl font-semibold text-white">Contact</h2>
            <p className="mt-4 max-w-xl leading-7 text-neutral-300">
              I’m available for freelance work, portfolio updates, and full-stack
              web app development. Reach out by email, WhatsApp, or LinkedIn.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {contacts.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-[#252a2d] text-teal-300 transition hover:border-teal-300 hover:bg-teal-300 hover:text-neutral-950"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-700 px-6 py-8 text-center">
        <p className="font-semibold text-white">Taksh Barot</p>

        <nav
          aria-label="Footer navigation"
          className="mt-3 flex justify-center gap-5 text-sm text-neutral-300"
        >
          <a href="#home" className={textLinkClass}>Home</a>
          <a href="#contact" className={textLinkClass}>Contact</a>
        </nav>
      </footer>
    </div>
  );
}