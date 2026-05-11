import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/motion/smooth-scroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://niym.ai"),
  title: "Shivam Technologies — AI products, built with care.",
  description:
    "A senior engineer working directly with founders and teams to design and ship AI features and automation workflows.",
  openGraph: {
    title: "Shivam Technologies",
    description:
      "AI products, built with care. AI consulting and automation, shipped end-to-end.",
    type: "website",
    url: "https://niym.ai",
    siteName: "Shivam Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Technologies — AI products, built with care.",
    description:
      "AI consulting and automation, shipped end-to-end. Senior engineer, working directly with founders and teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
