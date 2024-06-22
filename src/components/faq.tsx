"use client";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Stack,
} from "@chakra-ui/react";
import AnimatedHeading from "./animatedHeading";
import { useTranslations } from "next-intl";

interface AccordionElementProps {
  title: string;
  children: React.ReactNode;
}

const AccordionElement: React.FC<AccordionElementProps> = ({
  title,
  children,
}) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box
            fontSize={"lg"}
            fontWeight={"600"}
            as="span"
            flex="1"
            textAlign="left"
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel fontSize={"md"} color={"gray.500"} pb={4}>
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default function Faq() {
  const t = useTranslations("Components.FAQ");
  const faqs: AccordionElementProps[] = [
    {
      title: t("microwavableQuestion"),
      children: t("microwavableAnswer"),
    },
    {
      title: t("foodSafeQuestion"),
      children: t("foodSafeAnswer"),
    },
    {
      title: t("minimumOrderQuestion"),
      children: t("minimumOrderAnswer"),
    },
    {
      title: t("pricingQuestion"),
      children: t("pricingAnswer"),
    },
  ];
  return (
    <Container maxW={"container.xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} minH={"50vh"}>
        <Stack spacing={4}>
          <AnimatedHeading text={t("heading")} size="2xl" my={2} />
          <Accordion allowToggle>
            {faqs.map((faq, index) => (
              <AccordionElement key={index} title={faq.title}>
                {faq.children}
              </AccordionElement>
            ))}
          </Accordion>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
