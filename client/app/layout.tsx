import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./ui/home/sidebar";

export const metadata: Metadata = {
  title: "Claudia Arias Portfolio",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
        {children}
      </body>
    </html>
  );
}
