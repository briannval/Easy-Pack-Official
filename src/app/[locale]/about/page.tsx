"use client";
import dynamic from "next/dynamic";
import { Button, Container, Icon, VStack } from "@chakra-ui/react";
import { FaUtensils } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Mission = dynamic(() => import("@/components/mission"), {});
const Qualities = dynamic(() => import("@/components/qualities"), {});
const Faq = dynamic(() => import("@/components/faq"));

export default function About() {
  const t = useTranslations("Pages.About");

  return (
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
          as={"a"}
          href={"/products"}
          aria-label="Products CTA"
          id="view-products"
        >
          {t("productsCTA")}
        </Button>
      </VStack>
    </Container>
  );
}
