import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Easy Pack Indonesia",
  description: "Official Website of PT Easy Pack Indonesia",
  authors: [
    { name: "Brian Adhitya" },
    { name: "PT Easy Pack Indonesia" },
    { name: "Nadeen Horia" },
  ],
  creator: "Brian Adhitya",
  publisher: "Brian Adhitya",
  generator: "Next.js",
  applicationName: "Easy Pack Official Website",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Easy Pack",
    "Food Packaging",
    "Jakarta",
    "Thinwall",
    "Spork",
    "Container",
  ],
};

export default function RootLayout({ children }: Props) {
  return children;
}
