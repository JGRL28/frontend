import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toast } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promar | La mejor calidad",
  description:
    "Promar: Tu proveedor confiable de insumos para sushi, productos congelados, abarrotes y salmón fresco de calidad. Descubre nuestra amplia variedad de ingredientes y suministros ideales para chefs, restaurantes y amantes de la cocina japonesa. ¡Calidad y frescura garantizadas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
