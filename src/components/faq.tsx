"use client";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

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

const faqs: AccordionElementProps[] = [
  {
    title: "Is it microwavable / cookable?",
    children: "Our products are microwavable but not suitable for cooking.",
  },
  {
    title: "Is it food safe?",
    children: "Yes, all Easy Pack products are food safe.",
  },
  {
    title: "What is the minimum order quantity?",
    children:
      "Minimum order quantities vary by product. Please contact us on WhatsApp for details.",
  },
  {
    title: "Where can I find the prices?",
    children: "For pricing and order inquiries, please contact us on WhatsApp.",
  },
];

export default function Faq() {
  return (
    <Container maxW={"container.xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} minH={"50vh"}>
        <Stack spacing={4}>
          <Heading size={"2xl"} my={2}>
            Common FAQs
          </Heading>
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
