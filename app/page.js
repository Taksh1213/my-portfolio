import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaEnvelope, FaLinkedin, FaReact, FaNodeJs, FaDatabase, FaWhatsapp } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiHtml5, SiPhp, SiMysql, SiBootstrap } from 'react-icons/si';

const skillItems = [
  { name: 'React.js', icon: <FaReact className="h-5 w-5 text-sky-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="h-5 w-5 text-slate-100" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="h-5 w-5 text-cyan-400" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="h-5 w-5 text-purple-400" /> },
  { name: 'JavaScript', icon: <SiJavascript className="h-5 w-5 text-amber-400" /> },
  { name: 'HTML', icon: <SiHtml5 className="h-5 w-5 text-orange-500" /> },
  { name: 'PHP', icon: <SiPhp className="h-5 w-5 text-violet-500" /> },
  { name: 'MySQL', icon: <SiMysql className="h-5 w-5 text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="h-5 w-5 text-emerald-400" /> },
  { name: 'Express.js', icon: <SiExpress className="h-5 w-5 text-slate-200" /> },
  { name: 'MongoDB', icon: <SiMongodb className="h-5 w-5 text-emerald-500" /> },
  { name: 'React Icons', icon: <FaReact className="h-5 w-5 text-sky-400" /> },
];

const projects = [
  {
    title: 'Weather Dashboard',
    description: 'Frontend built with React.js, backend with Node.js and Express. Features live weather forecasts using weather API and live news updates with news API. Includes responsive design, live search, animated weather cards, and mobile-friendly UI.',
    image: '/images/weather-dashboard.webp',
    github: 'https://github.com/Taksh1213/weather-dashboard',
  },
  {
    title: 'Expense Tracker',
    description: 'Backend built with Node.js, Express.js, MongoDB, and cookies for session management. Frontend developed with Next.js, CSS, and Tailwind CSS. Users can create profiles, track income and expenses, view real-time charts, analyze spending patterns, and see detailed expense analytics.',
    image: '/images/expense-tracker.webp',
    github: 'https://github.com/Taksh1213/expense-tracker-frontend',
     liveDemo: 'https://expense-tracker-taksh.vercel.app/',
  },
  {
    title: 'Hotel Management System',
    description: 'Full-stack MERN app with Node.js, Express.js, MongoDB backend and Next.js frontend. Features admin panel with complete CRUD operations for hotel management. User dashboard for browsing and booking hotels. Integrated Stripe API for secure online payment processing and booking confirmation.',
    image: '/images/hotel-managment.webp',
    github: 'https://github.com/Taksh1213/hotel-frontend',
    liveDemo: 'https://hotel-frontend-green.vercel.app/',
  },
  {
    title: 'My Portfolio',
    description: 'Personal portfolio website built with Next.js and Tailwind CSS. Showcases skills, projects, contact options, and live deployment on Vercel. Includes animated sections, icon-based contact links, and a responsive design.',
    image: '/images/portfolio.webp',
    github: 'https://github.com/Taksh1213/my-portfolio',
    liveDemo: 'https://taksh-dev.vercel.app/',
  },
];

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#e2e8f0' }} className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-30 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#home" className="text-lg font-semibold tracking-tight text-white">
            Taksh Barot
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#skills" className="text-sm text-slate-300 transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="text-sm text-slate-300 transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="text-sm text-slate-300 transition hover:text-white">
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/taksh-barot"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
            >
              <FaLinkedin className="h-4 w-4 text-sky-400" /> LinkedIn
            </a>
            <a
              href="https://github.com/Taksh1213"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
            >
              <FaGithub className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="overflow-hidden px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10 backdrop-blur-xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 animate-fade-right">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-400">MERN Stack & React Developer</p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Hi, I’m <span className="text-sky-400">Taksh Barot</span>.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                I build modern web apps with React.js, Next.js, Tailwind CSS, Node.js, Express, and MongoDB. I enjoy creating polished portfolio sites, dashboards, and full-stack solutions with smooth animations.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400 animate-pulse-slow"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com/Taksh1213"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/90 px-6 py-3 text-sm text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
                >
                  <FaGithub className="h-4 w-4" /> View GitHub
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 text-slate-300 shadow-xl shadow-slate-950/20 animate-fade-left delay-150">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">What I build</p>
              <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-sm shadow-slate-950/10">
                  React.js apps with interactive UI
                </li>
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-sm shadow-slate-950/10">
                  Next.js landing pages and portfolios
                </li>
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-sm shadow-slate-950/10">
                  REST APIs with Node.js and Express
                </li>
                <li className="rounded-3xl border border-slate-800 bg-slate-900/80 px-4 py-4 shadow-sm shadow-slate-950/10">
                  MongoDB data storage and dashboards
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20 animate-fade-up">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Skills</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Core technologies I use daily</h2>
              </div>
              <p className="max-w-2xl text-slate-400">
                I build React.js and Next.js experiences with Tailwind CSS. I also write backend code with Node.js, Express, and MongoDB for full-stack apps.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {skillItems.map((skill) => (
                <div
                  key={skill.name}
                  className="group rounded-3xl border border-slate-800 bg-slate-950/80 px-5 py-6 text-slate-200 transition hover:-translate-y-1 hover:border-sky-500 hover:bg-slate-900/95"
                >
                  <div className="flex items-center gap-3 text-sky-400">
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20 animate-fade-up">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Projects</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Selected work</h2>
              </div>
              <p className="max-w-xl text-slate-400">
                These are the types of React and full-stack projects I enjoy building with polished interactions and clean UI.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article key={project.title} className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-md shadow-slate-950/10 transition duration-500 hover:-translate-y-2 hover:border-sky-500 hover:bg-slate-900/95 animate-fade-up delay-150">
                  {project.image ? (
                    <div className="relative mb-6 h-44 overflow-hidden rounded-3xl bg-slate-900/90 shadow-inner shadow-slate-950/20">
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
                          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
                        >
                          <FaGithub className="h-4 w-4" /> View on GitHub
                        </a>
                      ) : null}
                      {project.liveDemo ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
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

      <section id="contact" className="px-6 pb-16 pt-10 sm:px-10">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/20 animate-fade-up">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Let’s start your next React project.</h2>
              <p className="mt-4 max-w-xl text-slate-400 leading-7">
                I’m available for freelance work, portfolio updates, and full-stack web app development. Send a message on GitHub or email me at the address below.
              </p>

              <div className="mt-8 flex items-center gap-3 text-slate-300">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=takshbarot38@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email"
                  title="Email: takshbarot38@gmail.com"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-900/80 border border-slate-800 text-slate-100 hover:bg-sky-500 transition-shadow"
                >
                  <FaEnvelope className="h-5 w-5" />
                </a>

                <a
                  href="https://wa.me/919904084040"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp: +91 9904084040"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-600 text-white border border-green-700 hover:bg-green-500 transition-shadow"
                >
                  <FaWhatsapp className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/taksh-barot"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-900/80 border border-slate-800 text-sky-400 hover:bg-slate-800 transition-shadow"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://github.com/Taksh1213"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-slate-900/80 border border-slate-800 text-slate-100 hover:bg-slate-800 transition-shadow"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 text-slate-300 shadow-lg shadow-slate-950/10">
              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Ready to connect?</p>
                  <p className="mt-4 text-slate-300">
                    Use this email and GitHub link to share your idea, ask for a portfolio review, or request a new React-based app.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
                    <p className="text-sm text-slate-400">Experience</p>
                    <p className="mt-3 text-2xl font-semibold text-white">MERN + React</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5">
                    <p className="text-sm text-slate-400">Focus</p>
                    <p className="mt-3 text-2xl font-semibold text-white">Animations + UI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950/95 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 sm:px-10 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Taksh Barot. Built with React.js, Next.js, Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="text-slate-400 transition hover:text-white">
              Home
            </a>
            <a href="#contact" className="text-slate-400 transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
