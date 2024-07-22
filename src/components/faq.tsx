"use client";
import {
  Container,
  SimpleGrid,
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
import ImageSlider from "./imageSlider";
import { AccordionElementProps } from "@/types/components";

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
            id="question"
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel fontSize={"md"} color={"gray.500"} pb={4} id="answer">
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
        <ImageSlider
          images={Array.from(
            { length: 3 },
            (_, i) => `/container${i + 4}.jpeg`
          )}
        />
      </SimpleGrid>
    </Container>
  );
}
