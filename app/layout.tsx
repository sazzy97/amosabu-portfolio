import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amos Osaze Abu — Digital Product Designer",
  description: "A Digital Product Designer passionate about shaping digital solutions that drive impact, usability, and growth.",
  keywords: ["Amos Osaze Abu", "Product Designer", "UI/UX Designer", "Lagos", "Fintech", "Logistics", "Design Systems"],
  openGraph: {
    title: "Amos Osaze Abu — Digital Product Designer",
    description: "Shaping digital solutions that balance empathy with strategic business impact.",
    images: ["https://framerusercontent.com/assets/cuAETykSnldOjGvx1X9Rsdus.jpg"],
    url: "https://osazeabu.com",
    siteName: "Amos Osaze Abu Portfolio",
  },
  icons: {
    icon: "https://framerusercontent.com/images/Qvy1j7c9lx9a3Ej1foRl3Jn8NVU.jpeg",
    apple: "https://framerusercontent.com/images/XUuIMxRQx3Ag392Gw9Q8d7LAfU.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#ff5900] selection:text-white">
        {children}
      </body>
    </html>
  );
}
