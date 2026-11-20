'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  FaArrowLeft,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaGlobe,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLanguage,
} from 'react-icons/fa';
import resumeData from '../../public/resume.json';

const freshifyProject = {
  title: 'Freshify — Online Grocery Store',
  description:
    'Built a grocery store with ASP.NET Core MVC, C#, Entity Framework Core, SQL Server, and Bootstrap. Customers can browse products, manage their cart, and place cash-on-delivery orders. The admin dashboard manages products, categories, orders, payments, and reviews.',
  github: 'https://github.com/Taksh1213/Freshify',
};

const sectionHeadingClass =
  'flex items-center gap-2 border-b border-slate-800 pb-2 print-title';

const contactLinkClass =
  'flex items-center justify-center gap-2 hover:text-sky-400 transition sm:justify-start print-sub';

export default function ResumeClient() {
  const { personalInfo, education, skills, languages, projects } = resumeData;

  const hasFreshify = projects.some(
    (project) =>
      project.github?.toLowerCase().replace(/\/$/, '').replace(/\.git$/, '') ===
        freshifyProject.github.toLowerCase() ||
      project.title.toLowerCase().includes('freshify')
  );

  const resumeProjects = hasFreshify ? projects : [freshifyProject, ...projects];

  useEffect(() => {
    const timer = setTimeout(() => {
      window.print();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  function handleDownload() {
    window.print();
  }

  return (
    <main className="resume-page min-h-screen bg-slate-950 px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <style jsx global>{`
        @page {
          size: A4;
          margin: 12mm 15mm;
        }

        @media print {
          html,
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
          }

          .resume-page,
          .resume-page .print-container {
            width: auto !important;
            max-width: none !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            border: 0 !important;
            border-radius: 0 !important;
            background: #fff !important;
            color: #0f172a !important;
            overflow: visible !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }

          .resume-page *,
          .resume-page *::before,
          .resume-page *::after {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            box-shadow: none !important;
            text-shadow: none !important;
          }

          .resume-page .no-print {
            display: none !important;
          }

          .resume-page .resume-header {
            display: block !important;
            margin-bottom: 4mm !important;
            padding-bottom: 3mm !important;
            border-bottom: 1px solid #cbd5e1 !important;
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .resume-page .resume-header-copy {
            text-align: left !important;
          }

          .resume-page .resume-photo {
            float: right;
            width: 18mm !important;
            height: 18mm !important;
            margin: 0 0 2mm 4mm;
            border: 1px solid #cbd5e1 !important;
            border-radius: 3mm !important;
          }

          .resume-page .resume-contacts {
            display: block !important;
            clear: both;
          }

          .resume-page .resume-contacts a {
            display: inline-block !important;
            margin: 0 3mm 1mm 0;
            overflow-wrap: anywhere;
          }

          .resume-page .print-grid,
          .resume-page .print-column {
            display: block !important;
          }

          .resume-page .print-section {
            margin: 0 0 4mm !important;
          }

          .resume-page .print-title {
            display: block !important;
            width: 100% !important;
            box-sizing: border-box;
            margin: 0 0 2mm !important;
            padding: 0 0 1mm !important;
            border-bottom: 1.5pt solid #0284c7 !important;
            color: #0f172a !important;
            break-inside: avoid;
            page-break-inside: avoid;
            break-after: avoid;
            page-break-after: avoid;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          .resume-page .print-title h2 {
            margin: 0 !important;
            font-size: 12pt !important;
            color: #0f172a !important;
          }

          .resume-page .print-card {
            margin: 0 0 2.5mm !important;
            padding: 0 !important;
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .resume-page .print-card h3 {
            break-after: avoid;
            page-break-after: avoid;
          }

          .resume-page .print-header-title {
            margin: 0 !important;
            font-size: 21pt !important;
            color: #0f172a !important;
          }

          .resume-page .print-accent {
            color: #0369a1 !important;
          }

          .resume-page .print-sub {
            color: #334155 !important;
            font-size: 9.5pt !important;
            line-height: 1.35 !important;
          }

          .resume-page .print-links {
            display: block !important;
            color: #475569 !important;
            font-size: 8pt !important;
            overflow-wrap: anywhere;
          }

          .resume-page .print-badges {
            display: block !important;
          }

          .resume-page .print-badge {
            display: inline-block !important;
            box-sizing: border-box;
            margin: 0 1.5mm 1.5mm 0 !important;
            padding: 0.5mm 1.5mm !important;
            border: 1px solid #0284c7 !important;
            border-radius: 5px !important;
            background: #fff !important;
            color: #1e293b !important;
            font-size: 8.5pt !important;
            line-height: 1.25 !important;
            white-space: nowrap;
            vertical-align: top;
            break-inside: avoid;
            page-break-inside: avoid;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          .resume-page a {
            color: #0369a1 !important;
            text-decoration: none !important;
          }
        }
      `}</style>

      {/* Navigation & Actions */}
      <div className="no-print mx-auto mb-6 flex max-w-4xl items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
        >
          <FaArrowLeft className="h-4 w-4" /> Back to Portfolio
        </Link>

        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
        >
          <FaDownload className="h-4 w-4" /> Download PDF
        </button>
      </div>

      <article className="print-container mx-auto max-w-4xl rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/50 backdrop-blur-xl sm:p-10">
        {/* Header */}
        <header className="resume-header mb-6 flex flex-col items-center gap-6 border-b border-slate-800/80 pb-6 sm:flex-row sm:items-start">
          {personalInfo.profilePhoto && (
            <img
              src={personalInfo.profilePhoto}
              alt={personalInfo.name}
              className="resume-photo h-24 w-24 rounded-2xl border border-slate-700 bg-slate-800 object-cover shadow-md sm:h-28 sm:w-28"
            />
          )}

          <div className="resume-header-copy flex-1 space-y-2 text-center sm:text-left">
            <div>
              <h1 className="print-header-title text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {personalInfo.name}
              </h1>

              <p className="print-accent mt-0.5 text-base font-medium text-sky-400 sm:text-lg">
                {personalInfo.title}
              </p>
            </div>

            <p className="print-sub max-w-3xl text-xs leading-relaxed text-slate-300 sm:text-sm">
              {personalInfo.summary}
            </p>

            <div className="resume-contacts grid grid-cols-1 gap-2 pt-1 text-xs text-slate-400 sm:grid-cols-2 md:grid-cols-3">
              <a href={`mailto:${personalInfo.email}`} className={contactLinkClass}>
                <FaEnvelope className="no-print text-sky-400" />
                <span>{personalInfo.email}</span>
              </a>

              <a href={`tel:${personalInfo.phone}`} className={contactLinkClass}>
                <FaPhone className="no-print text-sky-400" />
                <span>{personalInfo.phone}</span>
              </a>

              <a href={personalInfo.website} target="_blank" rel="noreferrer" className={contactLinkClass}>
                <FaGlobe className="no-print text-sky-400" />
                <span>Portfolio Website</span>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className={contactLinkClass}>
                <FaLinkedin className="no-print text-sky-400" />
                <span>linkedin.com/in/taksh-barot</span>
              </a>

              <a href={personalInfo.github} target="_blank" rel="noreferrer" className={contactLinkClass}>
                <FaGithub className="no-print text-sky-400" />
                <span>github.com/Taksh1213</span>
              </a>

              <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" className={contactLinkClass}>
                <FaWhatsapp className="no-print text-sky-400" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </header>

        <div className="print-grid grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-[1.7fr_1fr]">
          <div className="print-column space-y-6 sm:space-y-8">
            {/* Projects */}
            <section className="print-section space-y-4">
              <div className={sectionHeadingClass}>
                <FaBriefcase className="no-print text-lg text-sky-400" />
                <h2 className="text-xl font-bold text-white">Projects</h2>
              </div>

              <div className="space-y-4">
                {resumeProjects.map((project, index) => (
                  <div key={index} className="print-card space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h3 className="print-sub text-sm font-semibold text-slate-100 sm:text-base">
                        {project.title}
                      </h3>

                      <div className="no-print flex gap-2 text-[11px]">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                            GitHub
                          </a>
                        )}

                        {project.liveDemo && (
                          <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="print-sub text-xs leading-relaxed text-slate-400 sm:text-sm">
                      {project.description}
                    </p>

                    <div className="print-links hidden space-y-0.5">
                      {project.github && <div>GitHub: {project.github}</div>}
                      {project.liveDemo && <div>Live Demo: {project.liveDemo}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="print-section space-y-4">
              <div className={sectionHeadingClass}>
                <FaGraduationCap className="no-print text-xl text-sky-400" />
                <h2 className="text-xl font-bold text-white">Education</h2>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="print-card space-y-0.5">
                    <div className="flex flex-wrap items-start justify-between gap-1">
                      <h3 className="print-sub text-xs font-semibold text-slate-100 sm:text-sm">
                        {edu.degree}
                      </h3>

                      <span className="print-badge rounded-full border border-sky-900/50 bg-sky-950/50 px-2 py-0.5 text-[10px] text-sky-400">
                        {edu.period}
                      </span>
                    </div>

                    <p className="print-sub text-xs font-medium text-slate-300">
                      {edu.institution}
                    </p>

                    <p className="print-sub text-[11px] leading-normal text-slate-400">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="print-column space-y-6 sm:space-y-8">
            {/* Technical Skills */}
            <section className="print-section space-y-4">
              <div className={sectionHeadingClass}>
                <FaCode className="no-print text-lg text-sky-400" />
                <h2 className="text-xl font-bold text-white">Technical Skills</h2>
              </div>

              <div className="print-badges flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="print-badge rounded-xl border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="print-section space-y-4">
              <div className={sectionHeadingClass}>
                <FaLanguage className="no-print text-xl text-sky-400" />
                <h2 className="text-xl font-bold text-white">Languages</h2>
              </div>

              <div className="print-badges grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className="print-badge rounded-xl border border-slate-800/80 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}