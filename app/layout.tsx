import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LoadingScreen } from "@/components/layout/LoadingScreen";

export const metadata: Metadata = {
  metadataBase: new URL("https://agra-citizen-school.vercel.app"),
  title: {
    default: "AGRA CITIZEN SCHOOL | Premium Education in Agra",
    template: "%s | AGRA CITIZEN SCHOOL"
  },
  description:
    "AGRA CITIZEN SCHOOL is a modern, student-centered institution in Agra focused on academic excellence, values, leadership, and future-ready learning.",
  keywords: [
    "AGRA CITIZEN SCHOOL",
    "best school in Agra",
    "admissions",
    "academics",
    "school facilities",
    "premium school website"
  ],
  openGraph: {
    title: "AGRA CITIZEN SCHOOL",
    description: "Premium education shaped by excellence, character, and care.",
    type: "website",
    locale: "en_IN"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LoadingScreen />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
