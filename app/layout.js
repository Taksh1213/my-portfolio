import './globals.css';

export const metadata = {
  title: 'Taksh Barot | MERN Portfolio',
  description: 'Portfolio of Taksh Barot - Next.js, Tailwind CSS, Node.js, Express, MongoDB',
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
