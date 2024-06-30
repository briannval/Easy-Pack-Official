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
} from "@chakra-ui/react";
import { BiCake, BiKnife } from "react-icons/bi";
import { GoContainer } from "react-icons/go";
import AnimatedHeading from "./animatedHeading";
import { useTranslations } from "next-intl";
import ImageSlider from "./imageSlider";

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
        <ImageSlider
          images={[
            "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
            "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
            "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
          ]}
        />
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
