import './globals.css';

export const metadata = {
  title: {
    default: 'Taksh Barot | MERN Portfolio',
    template: '%s | Taksh Barot',
  },
  description:
    'Portfolio of Taksh Barot — MERN & React developer. Building full-stack apps with Next.js, Tailwind CSS, Node.js, Express and MongoDB.',
  keywords: ['Taksh Barot', 'MERN', 'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Portfolio', 'Full-stack'],
  authors: [{ name: 'Taksh Barot', url: 'https://www.linkedin.com/in/taksh-barot' }],
  openGraph: {
    title: 'Taksh Barot — MERN & React Developer',
    description:
      'Full-stack developer building modern web applications with React, Next.js, Node.js, Express and MongoDB.',
    url: 'https://your-domain.com', // replace with your deployed site
    siteName: 'Taksh Barot Portfolio',
    images: [
      {
        url: '/images/weather-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Taksh Barot Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taksh Barot | MERN Portfolio',
    description:
      'Full-stack developer building modern web applications with React, Next.js, Node.js, Express and MongoDB.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: '100vh', backgroundColor: '#020617', color: '#e2e8f0' }}>
        {children}
      </body>
    </html>
  );
}
