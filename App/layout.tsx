import "./globals.css";
import { initSmoothScroll } from "@/lib/smoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  if (typeof window !== "undefined") {
    initSmoothScroll();
  }

  return (
    <html lang="en">
      <body className="bg-[#0b0f19] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
