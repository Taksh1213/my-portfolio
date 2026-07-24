'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaGlobe, FaBriefcase, FaGraduationCap, FaCode, FaLanguage } from 'react-icons/fa';
import resumeData from '../../public/resume.json';

export default function ResumePage() {
  const { personalInfo, education, skills, languages, projects } = resumeData;

  useEffect(() => {
    // Set document title for printing
    document.title = "Resume - " + personalInfo.name;
    
    // Automatically trigger print dialog on page load
    const timer = setTimeout(() => {
      window.print();
    }, 1000);
    return () => clearTimeout(timer);
  }, [personalInfo.name]);

  const handleDownload = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-6 px-4 sm:px-6 lg:px-8">
      {/* Print custom stylesheet to override Tailwind/dark styles and optimize spacing */}
      <style jsx global>{`
        @page {
          size: A4;
          margin: 0; /* Hides browser default header (title/timestamp) and footer (URL/pages) */
        }
        @media print {
          /* Reset backgrounds and colors */
          body, html, main {
            background: #ffffff !important;
            color: #0f172a !important;
            padding: 10mm 15mm 10mm 15mm !important; /* Margins inside page content */
            margin: 0 !important;
            width: 100% !important;
          }
          /* Disable all animations, transitions, and transforms that mess with printing page flow */
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
            transform: none !important;
            box-shadow: none !important;
            text-shadow: none !important;
          }
          .no-print {
            display: none !important;
          }
          .print-container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none !important;
            background: transparent !important;
            border: none !important;
          }
          .print-grid {
            display: grid !important;
            grid-template-columns: 7.5fr 4.5fr !important;
            gap: 1.25rem !important;
          }
          .print-card {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin-bottom: 0.6rem !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .print-title {
            color: #0f172a !important;
            border-bottom: 1.5px solid #cbd5e1 !important;
            padding-bottom: 0.15rem !important;
            font-size: 1.2rem !important;
            margin-top: 0 !important;
            margin-bottom: 0.5rem !important;
          }
          .print-header-title {
            font-size: 2rem !important;
            margin: 0 !important;
            color: #0f172a !important;
          }
          .print-accent {
            color: #0284c7 !important;
            font-size: 1rem !important;
            margin-top: 0.1rem !important;
            font-weight: 600 !important;
          }
          .print-sub {
            color: #334155 !important;
            font-size: 0.85rem !important;
            line-height: 1.35 !important;
          }
          .print-section-header {
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          img {
            width: 80px !important;
            height: 80px !important;
            border-radius: 12px !important;
            border: 1px solid #cbd5e1 !important;
          }
          a {
            text-decoration: none !important;
            color: #0284c7 !important;
          }
          .print-badge {
            border: 1px solid #94a3b8 !important;
            color: #1e293b !important;
            padding: 0.1rem 0.4rem !important;
            font-size: 0.75rem !important;
            background: transparent !important;
            border-radius: 6px !important;
          }
        }
      `}</style>

      {/* Navigation & Actions */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center no-print">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
        >
          <FaArrowLeft className="h-4 w-4" /> Back to Portfolio
        </Link>
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 px-5 py-2 text-sm font-semibold text-white transition shadow-lg shadow-sky-500/20"
        >
          <FaDownload className="h-4 w-4" /> Download PDF
        </button>
      </div>

      {/* Main Resume Card */}
      <article className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-slate-950/50 backdrop-blur-xl print-container">
        
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b border-slate-800/80 pb-6 mb-6">
          {personalInfo.profilePhoto && (
            <img
              src={personalInfo.profilePhoto}
              alt={personalInfo.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-slate-700 bg-slate-800 shadow-md"
            />
          )}
          <div className="flex-1 text-center sm:text-left space-y-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight print-header-title">{personalInfo.name}</h1>
              <p className="text-base sm:text-lg font-medium text-sky-400 mt-0.5 print-accent">{personalInfo.title}</p>
            </div>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl print-sub">
              {personalInfo.summary}
            </p>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1 text-xs text-slate-400">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center sm:justify-start gap-2 hover:text-sky-400 transition print-sub">
                <FaEnvelope className="text-sky-400 no-print" /> <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center justify-center sm:justify-start gap-2 hover:text-sky-400 transition print-sub">
                <FaPhone className="text-sky-400 no-print" /> <span>{personalInfo.phone}</span>
              </a>
              <a href={personalInfo.website} target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-2 hover:text-sky-400 transition print-sub">
                <FaGlobe className="text-sky-400 no-print" /> <span>Portfolio Website</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-2 hover:text-sky-400 transition print-sub">
                <FaLinkedin className="text-sky-400 no-print" /> <span>linkedin.com/in/taksh-barot</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-2 hover:text-sky-400 transition print-sub">
                <FaGithub className="text-sky-400 no-print" /> <span>github.com/Taksh1213</span>
              </a>
              <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center sm:justify-start gap-2 hover:text-sky-400 transition print-sub">
                <FaWhatsapp className="text-sky-400 no-print" /> <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Grid for Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr] gap-6 sm:gap-8 print-grid">
          
          {/* Left Column: Projects & Education */}
          <div className="space-y-6 sm:space-y-8">
            
            {/* Projects Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print-title print-section-header">
                <FaBriefcase className="text-sky-400 text-lg no-print" />
                <h2 className="text-xl font-bold text-white">Projects</h2>
              </div>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="space-y-1 print-card">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-100 print-sub" style={{ fontWeight: 600 }}>{project.title}</h3>
                      <div className="flex gap-2 text-[11px] no-print">
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
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed print-sub">{project.description}</p>
                    {/* Add printed versions of links for reference */}
                    <div className="hidden print:block text-[10px] text-slate-500 space-y-0.5">
                      {project.github && <div>GitHub: {project.github}</div>}
                      {project.liveDemo && <div>Live Demo: {project.liveDemo}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print-title print-section-header">
                <FaGraduationCap className="text-sky-400 text-xl no-print" />
                <h2 className="text-xl font-bold text-white">Education</h2>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-0.5 print-card">
                    <div className="flex flex-wrap justify-between items-start gap-1">
                      <h3 className="text-xs sm:text-sm font-semibold text-slate-100 print-sub" style={{ fontWeight: 600 }}>{edu.degree}</h3>
                      <span className="text-[10px] text-sky-400 bg-sky-950/50 border border-sky-900/50 px-2 py-0.5 rounded-full print-badge print-accent">{edu.period}</span>
                    </div>
                    <p className="text-xs font-medium text-slate-300 print-sub">{edu.institution}</p>
                    <p className="text-[11px] text-slate-400 leading-normal print-sub">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Skills & Languages */}
          <div className="space-y-6 sm:space-y-8">
            
            {/* Skills Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print-title print-section-header">
                <FaCode className="text-sky-400 text-lg no-print" />
                <h2 className="text-xl font-bold text-white">Technical Skills</h2>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-slate-300 bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-xl print-badge print:border-slate-300 print:text-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2 print-title print-section-header">
                <FaLanguage className="text-sky-400 text-xl no-print" />
                <h2 className="text-xl font-bold text-white">Languages</h2>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className="text-xs text-slate-300 bg-slate-950/60 border border-slate-800/80 px-3 py-1.5 rounded-xl print-badge print:border-slate-300 print:text-slate-800"
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
