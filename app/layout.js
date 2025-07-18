import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";

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

export const metadata = {
  title: "Shariq Khan Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-950">
      <head>
        <link rel="icon" href="/Portfolio-logo.png"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto">
          <div className="leading-relaxed text-slate-200 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div className="z-[-10] fixed inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#034a4391,transparent)]"></div>

            <div className="relative z-10"> {/* Add 'relative' and 'z-10' to bring content above background */}
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
