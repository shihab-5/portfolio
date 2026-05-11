import { Space_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "SHIHAB_UL_ISLAM // NEON_ARCHIVE",
  description: "Frontend Developer and Full Stack enthusiast specializing in high-performance digital systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
        />
      </head>
      <body
        className={`${spaceMono.variable} ${spaceGrotesk.variable} antialiased min-h-screen bg-surface-dim selection:bg-primary-container selection:text-on-primary relative bg-grid`}
      >
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
