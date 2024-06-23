import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { theme } from "@/themes/theme";
import { Box, ChakraProvider, Container, Flex } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Pack",
  description: "Official Website of PT Easy Pack Indonesia",
};

// script vs script async vs script defer
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
      <script
        async
        src="https://cdn.botpress.cloud/webchat/v1/inject.js"
      ></script>
      <Script async id="botpress-webchat" strategy="lazyOnload">
        {`
          window.botpressWebChat.init({
            "composerPlaceholder": "Chat with Easy Bot",
            "botConversationDescription": "Official bot for Easy Pack",
            "botId": "${process.env.BOTPRESS_BOT_ID}",
            "hostUrl": "${process.env.BOTPRESS_HOST_URL}",
            "messagingUrl": "${process.env.BOTPRESS_MESSAGING_URL}",
            "clientId": "${process.env.BOTPRESS_CLIENT_ID}",
            "webhookId": "${process.env.BOTPRESS_WEBHOOK_ID}",
            "lazySocket": true,
            "themeName": "${process.env.BOTPRESS_THEME_NAME}",
            "botName": "${process.env.BOTPRESS_BOT_NAME}",
            "stylesheet": "${process.env.BOTPRESS_STYLESHEET}",
            "frontendVersion": "v1",
            "showPoweredBy": true,
            "theme": "${process.env.BOTPRESS_THEME_NAME}",
            "themeColor": "${process.env.BOTPRESS_THEME_COLOR}",
            "allowedOrigins": []
          });
        `}
      </Script>
    </html>
  );
}
