// app/layout.tsx
import './globals.css';
import Navbar from './components/nevbar';

export const metadata = {
  title: 'Country Information',
  description: 'Next.js dynamic routing with country pages',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />  {/* Navbar is added here */}
        <main>{children}</main>
      </body>
    </html>
  );
}
