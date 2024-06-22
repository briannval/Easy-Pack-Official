"use client";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiCake, BiKnife } from "react-icons/bi";
import { GoContainer } from "react-icons/go";
import AnimatedHeading from "./animatedHeading";
import { useTranslations } from "next-intl";

interface FeatureProps {
  text: string;
  icon: React.ElementType;
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={"gold.400"}
      >
        <Icon as={icon} color={"white"} />
      </Flex>
      <Text fontWeight={500} color={"gray.600"}>
        {text}
      </Text>
    </Stack>
  );
};

export default function Mission() {
  const t = useTranslations("Components.Mission");

  const features: FeatureProps[] = [
    { icon: GoContainer, text: t("containers") },
    { icon: BiCake, text: t("cakebases") },
    { icon: BiKnife, text: t("knives") },
  ];

  return (
    <Container maxW={"container.xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} minH={"50vh"}>
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
        <Stack spacing={4}>
          <AnimatedHeading text={t("heading")} size="2xl" my={2} />
          <Text color={"gray.500"} fontSize={"lg"} my={1}>
            {t("predescription")}{" "}
            <Text as={"span"} color={"gold.300"} fontWeight={"600"}>
              Jakarta,{" "}
            </Text>
            {t("postdescription")}{" "}
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            {features.map((feature, index) => {
              return (
                <Feature key={index} icon={feature.icon} text={feature.text} />
              );
            })}
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
