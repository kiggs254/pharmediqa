import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PharmediQa | Global Health Strategy & Systems Strengthening",
    template: "%s | PharmediQa"
  },
  description: "PharmediQa works at the intersection of healthcare, technology, policy, and capital—designing scalable solutions that strengthen systems and improve population outcomes across the globe.",
  keywords: ["Healthcare Consulting", "Health Systems Strengthening", "Medical Technology", "Global Health Policy", "Healthcare Data Science", "Healthcare Strategy"],
  authors: [{ name: "PharmediQa" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pharmediqa.com",
    title: "PharmediQa | Advancing Health Systems Through Strategy & Data",
    description: "Designing scalable solutions that strengthen health systems and improve population outcomes globally.",
    siteName: "PharmediQa",
  },
  twitter: {
    card: "summary_large_image",
    title: "PharmediQa | Global Health Strategy",
    description: "Strengthening healthcare systems through strategy, data, and innovative partnerships.",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
