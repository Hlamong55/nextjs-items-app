import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-100">
        <Navbar />
        <main className="min-h-screen container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
