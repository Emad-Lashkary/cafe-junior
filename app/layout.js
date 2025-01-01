import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { CartProvider } from "./_context/CartContext";
import "./globals.css";
// import { Kalam } from "next/font/google";

// const font = Kalam({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={` bg-primary-100 text-primary-900`}>
          <Header />
          <main className="min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-36 animate-fadeIn">
              {children}
            </div>
          </main>
          <Footer />
        </body>
      </CartProvider>
    </html>
  );
}
