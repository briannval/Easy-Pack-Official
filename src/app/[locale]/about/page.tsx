"use client";
import Faq from "@/components/faq";
import Mission from "@/components/mission";
import Qualities from "@/components/qualities";
import { Button, Container, Icon, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaUtensils } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

export default function About() {
  const router = useRouter();
  const t = useTranslations("Pages.About");
  const l = useLocale();

  return (
    <main>
      <Container maxW={"5xl"} minH={"calc(100vh - 60px)"} mt={"60px"} py={20}>
        <VStack spacing={24}>
          <Mission />
          <Qualities />
          <Faq />
          <Button
            mt="-12"
            size="lg"
            colorScheme="yellow"
            leftIcon={<Icon as={FaUtensils} />}
            variant={"outline"}
            onClick={() => router.push(`${l}/products`)}
          >
            {t("productsCTA")}
          </Button>
        </VStack>
      </Container>
    </main>
  );
}
