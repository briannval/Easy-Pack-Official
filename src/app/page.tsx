"use client";
import RotatingImages from "@/components/rotatingImages";
import RotatingWords from "@/components/rotatingWords";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { FaQuestion, FaUtensils } from "react-icons/fa";

export default function Home() {
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
            color={"gray.500"}
            maxW={{ base: "md", md: "2xl" }}
          >
            Discover the seamless blend of functionality and elegance with our
            range of essentials, designed to enhance your everyday needs.
          </Text>
          <Stack spacing={6} direction={"row"}>
            <Button
              leftIcon={<FaUtensils />}
              px={6}
              color={"white"}
              bg={"gold.400"}
              _hover={{ bg: "gold.300" }}
              as={"a"}
              href="/products"
            >
              Browse
            </Button>
            <Button
              border={"1px"}
              borderColor={"gray.300"}
              leftIcon={<FaQuestion />}
              px={6}
              as={"a"}
              href="/about"
            >
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
