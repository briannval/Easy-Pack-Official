"use client";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { BiCake, BiKnife } from "react-icons/bi";
import { GoContainer } from "react-icons/go";

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
          <Box as="span" flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  );
};

const faqs: AccordionElementProps[] = [
  {
    title: "Section 1 title",
    children: "Section 1 content",
  },
  {
    title: "Section 2 title",
    children: "Section 2 content",
  },
  {
    title: "Section 3 title",
    children: "Section 3 content",
  },
  {
    title: "Section 4 title",
    children: "Section 4 content",
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
