import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LNS Pay",
  description: "White-label payment platform for merchants"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
