import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { theme } from "@/themes/theme";
import { Box, ChakraProvider, Container, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Pack",
  description: "Official Website of PT Easy Pack Indonesia",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ChakraProvider theme={theme}>
            <Navbar />
            <Flex direction="column">
              <Box as="main" flex="1">
                <Container maxW={"container.xl"}>{children}</Container>
              </Box>
              <Footer />
            </Flex>
          </ChakraProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
