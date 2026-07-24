import ResumeClient from './ResumeClient';

export const metadata = {
  title: 'Resume | Taksh Barot',
  description: 'Professional resume of Taksh Barot — MERN Stack & React Developer. View educational credentials, projects, languages, and technical skills.',
  keywords: ['Taksh Barot', 'Resume', 'CV', 'MERN Stack', 'React Developer', 'BCA Student', 'Full-stack Developer'],
  alternates: {
    canonical: 'https://taksh-dev.vercel.app/resume',
  },
  openGraph: {
    title: 'Resume | Taksh Barot',
    description: 'Professional resume of Taksh Barot — MERN Stack & React Developer.',
    url: 'https://taksh-dev.vercel.app/resume',
    type: 'website',
  }
};

export default function ResumePage() {
  return <ResumeClient />;
}
