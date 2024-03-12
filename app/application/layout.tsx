import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import FirebaseAuthContext from "@/context/FirebaseAuthContext";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Petito! Aplicação",
  description: "Cuide dos cuidados do seu bichinho!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FirebaseAuthContext>
      <section className={lexend.className}>{children}</section>
    </FirebaseAuthContext>
  );
}
