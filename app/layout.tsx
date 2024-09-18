import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Torneo de Fútbol",
  description: "Información sobre el torneo de fútbol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
<header className="bg-gradient-to-r from-orange-600 to-blue-600 text-pink py-6">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between">
      {/* Logo o título */}
      <h1 className="text-4xl font-extrabold leading-tight">
        Lightning Soccer Tournament
      </h1>
      {/* Navegación */}
      <nav className="hidden md:flex">
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gray-200 transition">Start</a></li>
          <li><a href="#teams" className="hover:text-gray-200 transition">Teams</a></li>
          <li><a href="#results" className="hover:text-gray-200 transition">Results</a></li>
        </ul>
      </nav>
      {/* Botón de menú móvil */}
      <button className="md:hidden text-2xl">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    {/* Navegación móvil */}
    <nav className="md:hidden mt-4">
      <ul className="space-y-2">
        <li><a href="#home" className="block text-lg hover:text-gray-200 transition">Start</a></li>
        <li><a href="#teams" className="block text-lg hover:text-gray-200 transition">Teams</a></li>
        <li><a href="#results" className="block text-lg hover:text-gray-200 transition">Results</a></li>
      </ul>
    </nav>
  </div>
</header>


        <main className="container mx-auto px-4 py-6">
          {children}
        </main>

        <footer className="bg-gradient-to-r from-orange-400 to-blue-600 text-pink py-6 mt-6">
  <div className="container mx-auto px-4 text-center">
    {/* Texto principal */}
    <p className="text-sm mb-2">&copy; 2024 Relámpago Soccer Tournament. Todos los derechos reservados.</p>
    
    {/* Redes sociales */}
    <div className="flex justify-center space-x-4 mb-4">
      <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-200 transition">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12.5c0-5.5-4.5-10-10-10S2 7 2 12.5 6.5 22 12 22c1.6 0 3.1-.3 4.5-.8v-7H13v-3h3.5V8.5c0-3.5 2.1-5.5 5.2-5.5 1.5 0 3 .1 3 .1v3.3h-1.7c-1.7 0-2.2.8-2.2 1.9v2.5H22l-1 3h-3v7c1.4.5 3 .8 4.5.8 5.5 0 10-4.5 10-10z"></path>
        </svg>
      </a>
      <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-200 transition">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 4.5a8.3 8.3 0 01-2.3.6 4.1 4.1 0 001.8-2.3 8.3 8.3 0 01-2.6.9A4.1 4.1 0 0015.5 3a4.1 4.1 0 00-4.1 4.1c0 .3.03.6.07.9A11.6 11.6 0 013 4.8a4.1 4.1 0 001.3 5.5A4.1 4.1 0 013 10.2v.1a4.1 4.1 0 003.3 4.1 4.1 4.1 0 01-1.8.1A4.1 4.1 0 017 18a4.1 4.1 0 003.8-2.7 8.3 8.3 0 002.5.7 8.3 8.3 0 01-5.1 1.8A8.4 8.4 0 012 16a11.6 11.6 0 006.3 1.8c7.6 0 11.8-6.3 11.8-11.8 0-.2 0-.4-.1-.6A8.3 8.3 0 0022 4.5z"></path>
        </svg>
      </a>
    </div>
    
    {/* Enlaces adicionales */}
    <p className="text-sm">
      <a href="#privacy" className="hover:text-gray-200 transition">Privacy Policy</a> | 
      <a href="#terms" className="hover:text-gray-200 transition">Terms of Service</a>
    </p>
  </div>
</footer>

      </body>
    </html>
  );
}
