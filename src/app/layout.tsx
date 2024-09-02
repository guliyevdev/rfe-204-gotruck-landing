import type { Metadata } from "next";
import "@/assets/scss/style.scss";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-gray-800">
        <Header/>
          {children}
        <Footer/>
        </body>
    </html>
  );
}
