import { Inter, Public_Sans, La_Belle_Aurore } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-publicSans",
});

export const laBelleAurore = La_Belle_Aurore({
  subsets: ["latin"],
  variable: "--font-laBelleAurore",
  weight: ["400"],
});
