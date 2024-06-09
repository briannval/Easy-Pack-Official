import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { theme } from "@/themes/theme";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
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
          <Flex direction="column" minH="100vh">
            <Box as="main" flex="1">
              {children}
            </Box>
            <Footer />
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}
