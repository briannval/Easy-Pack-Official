"use client";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useTranslations } from "next-intl";

export default function Maintenance() {
  const t = useTranslations("Pages.NotFound");

  return (
    <Center mt={"60px"} h={"calc(100vh - 60px)"}>
      <Box textAlign="center" py={10} px={6} maxW={"80%"}>
        <Box display="inline-block">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg={"gold.400"}
            rounded={"50px"}
            w={"55px"}
            h={"55px"}
            textAlign="center"
          >
            <CloseIcon
              aria-label="Not Found Icon"
              boxSize={"20px"}
              color={"white"}
              id="close-icon"
            />
          </Flex>
        </Box>
        <Heading as="h1" size="xl" mt={6} mb={2} id="heading">
          {t("heading")}
        </Heading>
        <Text color={"gray.500"} as={"h3"} id="description">
          {t("description")}
        </Text>
      </Box>
    </Center>
  );
}
