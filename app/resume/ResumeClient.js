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
  FaMapMarkerAlt,
} from 'react-icons/fa';
import resumeData from '../../public/resume.json';

const freshifyProject = {
  title: 'Freshify — Online Grocery Store',
  description:
    'Built a grocery store with ASP.NET Core MVC, C#, Entity Framework Core, SQL Server, and Bootstrap. Customers can browse products, manage their cart, and place cash-on-delivery orders. The admin dashboard manages products, categories, orders, payments, and reviews.',
  github: 'https://github.com/Taksh1213/Freshify',
};

function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="print-title flex items-center gap-2 border-b border-slate-800 pb-2">
      <Icon className="no-print text-lg text-sky-400" aria-hidden="true" />
      <h2 className="text-xl font-bold text-white">{children}</h2>
    </div>
  );
}

export default function ResumeClient() {
  const { personalInfo, education, experience, skills, languages, projects } =
    resumeData;

  const hasFreshify = projects.some(
    (project) =>
      project.github?.toLowerCase().replace(/\/$/, '').replace(/\.git$/, '') ===
        freshifyProject.github.toLowerCase() ||
      project.title.toLowerCase().includes('freshify')
  );

  const resumeProjects = hasFreshify ? projects : [freshifyProject, ...projects];

  const contacts = [
    {
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: FaEnvelope,
    },
    {
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      icon: FaPhone,
    },
    {
      label: 'Portfolio',
      value: personalInfo.website?.replace(/^https?:\/\//, '').replace(/\/$/, ''),
      href: personalInfo.website,
      icon: FaGlobe,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: personalInfo.linkedin?.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
      href: personalInfo.linkedin,
      icon: FaLinkedin,
      external: true,
    },
    {
      label: 'GitHub',
      value: personalInfo.github?.replace(/^https?:\/\//, '').replace(/\/$/, ''),
      href: personalInfo.github,
      icon: FaGithub,
      external: true,
    },
    {
      label: 'WhatsApp',
      value: personalInfo.whatsapp ? 'Chat on WhatsApp' : '',
      href: personalInfo.whatsapp,
      icon: FaWhatsapp,
      external: true,
    },
  ];

  useEffect(() => {
    const timer = window.setTimeout(() => window.print(), 1000);
    return () => window.clearTimeout(timer);
  }, []);

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
            display: flow-root !important;
            margin-bottom: 4mm !important;
            padding-bottom: 3mm !important;
            border-bottom: 1px solid #cbd5e1 !important;
            page-break-inside: avoid;
            break-inside: avoid;
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

          .resume-page .print-section {
            margin: 0 0 4mm !important;
          }

          .resume-page .print-title {
            display: block !important;
            width: 100% !important;
            margin: 0 0 2mm !important;
            padding: 0 0 1mm !important;
            border-bottom: 1.5pt solid #0284c7 !important;
            page-break-inside: avoid;
            break-inside: avoid;
            page-break-after: avoid;
            break-after: avoid;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          .resume-page .print-title h2 {
            margin: 0 !important;
            color: #0f172a !important;
            font-size: 12pt !important;
          }

          .resume-page .print-card {
            margin: 0 0 2.5mm !important;
            padding: 0 !important;
            page-break-inside: avoid;
            break-inside: avoid;
          }

          .resume-page .print-section.space-y-4 > :not(:first-child) {
            margin-top: 1.5mm !important;
          }

          .resume-page .print-projects .print-card {
            margin: 0 0 4mm !important;
          }

          .resume-page .print-projects .print-card:last-child {
            margin-bottom: 0 !important;
          }

          .resume-page .print-projects .print-card > p {
            margin-top: 1mm !important;
            line-height: 1.45 !important;
          }

          .resume-page .print-header-title {
            margin: 0 !important;
            color: #0f172a !important;
            font-size: 21pt !important;
          }

          .resume-page .print-accent {
            color: #0369a1 !important;
          }

          .resume-page .print-sub {
            color: #334155 !important;
            font-size: 9.5pt !important;
            line-height: 1.35 !important;
          }

          .resume-page .print-badges,
          .resume-page .resume-contacts {
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
            page-break-inside: avoid;
            break-inside: avoid;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          .resume-page .resume-contact {
            display: block !important;
            margin-bottom: 1mm;
            overflow-wrap: anywhere;
            color: #334155 !important;
            text-decoration: none !important;
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>

      <div className="no-print mx-auto mb-6 flex max-w-4xl flex-wrap items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
        >
          <FaArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Portfolio
        </Link>

        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
        >
          <FaDownload className="h-4 w-4" aria-hidden="true" />
          Download PDF
        </button>
      </div>

      <article className="print-container mx-auto max-w-4xl rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/50 backdrop-blur-xl sm:p-10">
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
          </div>
        </header>

        <div className="space-y-8">
          <section className="print-section space-y-4">
            <SectionHeading icon={FaCode}>Technical Skills</SectionHeading>

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

          <section className="print-section print-projects space-y-4">
            <SectionHeading icon={FaBriefcase}>Projects</SectionHeading>

            <div className="space-y-4">
              {resumeProjects.map((project, index) => (
                <div key={index} className="print-card space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="print-sub text-sm font-semibold text-slate-100 sm:text-base">
                      {project.title}
                    </h3>

                    <div className="no-print flex gap-2 text-xs">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sky-400 hover:underline"
                        >
                          GitHub
                        </a>
                      )}

                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sky-400 hover:underline"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="print-sub text-xs leading-relaxed text-slate-400 sm:text-sm">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="print-section print-education space-y-4">
            <SectionHeading icon={FaGraduationCap}>Education</SectionHeading>

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

          {experience && (
            <section className="print-section space-y-4">
              <SectionHeading icon={FaBriefcase}>Experience</SectionHeading>

              <p className="print-sub text-sm leading-relaxed text-slate-300">
                {experience}
              </p>
            </section>
          )}

          <section className="print-section space-y-4">
            <SectionHeading icon={FaLanguage}>Languages</SectionHeading>

            <div className="print-badges flex flex-wrap gap-2">
              {languages.map((language) => (
                <span
                  key={language}
                  className="print-badge rounded-xl border border-slate-800/80 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300"
                >
                  {language}
                </span>
              ))}
            </div>
          </section>

          <section className="print-section space-y-4">
            <SectionHeading icon={FaEnvelope}>Contact Us</SectionHeading>

            <div className="resume-contacts grid gap-3 sm:grid-cols-2">
              {contacts
                .filter((contact) => contact.value)
                .map(({ label, value, href, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                    className="resume-contact print-sub flex items-start gap-2 text-sm text-slate-300 transition hover:text-sky-400"
                  >
                    <Icon
                      className="no-print mt-0.5 shrink-0 text-sky-400"
                      aria-hidden="true"
                    />
                    <span className="min-w-0 break-words">
                      <strong>{label}</strong> · {value}
                    </span>
                  </a>
                ))}

              {personalInfo.address && (
                <address className="resume-contact print-sub flex items-start gap-2 text-sm not-italic text-slate-300 sm:col-span-2">
                  <FaMapMarkerAlt
                    className="no-print mt-0.5 shrink-0 text-sky-400"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 break-words">
                    <strong>Address</strong> · {personalInfo.address}
                  </span>
                </address>
              )}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}