import type { Metadata } from "next";
import "@/assets/scss/style.scss";
import "@/assets/scss/icons.scss";
import { Footer } from "@/app/components/footer";
import { Header } from "@/app/components/header";
export const metadata: Metadata = {
  title: "GoTruck onlayn yük maşını sifaişi",
  description: "Yük maşını, TIR, fura, ref,avtomobil, minivan və s. sifariş etmək üçün GoTruck platformasından istifadə edin.",
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
