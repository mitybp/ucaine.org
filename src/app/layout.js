import "./globals.css";

export const metadata = {
  title: "Ucai'ne Libre Politea",
  description: "Politeia Livre de Ucai'ne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
