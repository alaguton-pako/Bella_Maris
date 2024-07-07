import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import CssBaseline from "@mui/material/CssBaseline";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bella Maris Cake and Confectionaries",
  description:
    "welcome to Bella maris cake and confectionaries, your number one stop for all of your events catering needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CssBaseline />
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
