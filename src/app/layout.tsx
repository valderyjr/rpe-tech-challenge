import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { formattedQuestions } from "@/data/questions";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const sidebarMenuItems = formattedQuestions.map((question) => ({
  id: question.id,
  name: question.question,
  href: question.href,
}));

export const metadata: Metadata = {
  title: "Desafio Técnico RPE Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased flex`}>
        <Suspense>
          <Sidebar items={sidebarMenuItems} />
        </Suspense>
        <main className="p-4 flex-1">{children}</main>
      </body>
    </html>
  );
}
