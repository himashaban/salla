import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Sidebar />
      <body
      >
        {children}
      </body>
      <Footer />
    </html>
  );
}
