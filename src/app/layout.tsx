import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Wrapper } from "@/components/wrapper";
import { theme } from "@/themes/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Supply",
  description: "Official Website of PT Easy Supply Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Wrapper>{children}</Wrapper>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
