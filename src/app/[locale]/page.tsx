"use client";
import RotatingImages from "@/components/rotatingImages";
import RotatingWords from "@/components/rotatingWords";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { FaQuestion, FaUtensils } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations("Pages.Home");
  const l = useLocale();

  return (
    <Box position={"relative"} zIndex={1} height={"100vh"}>
      <Box
        position="absolute"
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        px={{ base: 20, md: 0 }}
        zIndex={-1}
      >
        <RotatingImages />
      </Box>
      <Flex justifyContent="center" alignItems="center" height="100%">
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            as={"h1"}
            fontSize={{ base: "3xl", sm: "4xl", md: "7xl" }}
            lineHeight={"110%"}
          >
            <RotatingWords />
          </Heading>
          <Text
            fontWeight={600}
            as={"h3"}
            color={"gray.500"}
            maxW={"70%"}
            fontSize={{ base: "sm", lg: "lg" }}
          >
            {t("catchphrase")}
          </Text>
          <Stack
            spacing={{ base: 4, md: 6 }}
            direction={{ base: "column", md: "row" }}
          >
            <Button
              leftIcon={<FaUtensils />}
              px={{ base: 4, md: 6 }}
              color={"white"}
              bg={"gold.400"}
              fontSize={{ base: "sm", md: "md" }}
              _hover={{ bg: "gold.300" }}
              as={"a"}
              href={`/${l}/products`}
            >
              {t("productsCTA")}
            </Button>
            <Button
              border={"1px"}
              borderColor={"gray.300"}
              leftIcon={<FaQuestion />}
              fontSize={{ base: "sm", md: "md" }}
              px={{ base: 4, md: 6 }}
              as={"a"}
              href={`/${l}/about`}
            >
              {t("aboutCTA")}
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
