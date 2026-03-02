import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Prashant Mane | Power BI Developer & Data Analyst",
  description: "Premium BI Portfolio of Prashant Mane. Specialist in Power BI, SQL, SAP HANA, and Enterprise Data Modeling. Based in Pune, India.",
  keywords: ["Power BI Developer Pune", "SQL Analyst India", "SAP HANA Data Analyst", "Business Intelligence Consultant", "DAX Specialist", "Freelance BI Developer"],
  authors: [{ name: "Prashant Mane" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
