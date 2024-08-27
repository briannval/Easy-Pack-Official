"use client";
import {
  Container,
  SimpleGrid,
  Flex,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { BiCake, BiKnife } from "react-icons/bi";
import { GoContainer } from "react-icons/go";
import { useTranslations } from "next-intl";
import ImageSlider from "./imageSlider";
import { FeatureProps } from "@/types/components";

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
        <ImageSlider
          images={Array.from(
            { length: 3 },
            (_, i) => `/container${i + 1}.jpeg`
          )}
        />
        <Stack spacing={4}>
          <Heading size={"2xl"} my={2} as={"h1"}>
            {t("heading")}
          </Heading>
          <Text
            color={"gray.500"}
            fontSize={"lg"}
            my={1}
            as={"p"}
            id="easy-pack-description"
          >
            {t("predescription")}{" "}
            <Text as={"span"} color={"gold.300"} fontWeight={"600"}>
              Easy Pack,{" "}
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
