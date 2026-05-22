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
    url: 'https://taksh-dev.vercel.app',
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
    canonical: 'https://taksh-dev.vercel.app',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Taksh Barot",
        "url": "https://taksh-dev.vercel.app",
        "sameAs": [
          "https://www.linkedin.com/in/taksh-barot",
          "https://github.com/Taksh1213"
        ],
        "jobTitle": "Full-stack Developer",
        "worksFor": { "@type": "Organization", "name": "Taksh Barot" }
      },
      {
        "@type": "WebSite",
        "name": "Taksh Barot Portfolio",
        "url": "https://taksh-dev.vercel.app",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://taksh-dev.vercel.app/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="0tBrmiGlRZPSHiHcdwV7S8EzxM2Jh-1gA0DI4NEsTDE" />
        <meta name="keywords" content="Taksh Barot, MERN, React, Next.js, Node.js, Express, MongoDB, Portfolio, Full-stack" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body style={{ margin: 0, minHeight: '100vh', backgroundColor: '#020617', color: '#e2e8f0' }}>
        {children}
      </body>
    </html>
  );
}
