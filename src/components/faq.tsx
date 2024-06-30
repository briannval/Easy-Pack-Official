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
import ImageSlider from "./imageSlider";

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
        <ImageSlider
          images={[
            "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
            "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
            "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
          ]}
        />
      </SimpleGrid>
    </Container>
  );
}
