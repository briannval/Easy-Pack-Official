"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { FaQuestion, FaUtensils } from "react-icons/fa";

const images = ["/home1.jpeg", "/home2.jpeg"];
export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      position={"relative"}
      zIndex={1}
      height={"calc(100vh - 60px)"}
      mt="60px"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        px={{ base: 20, md: 0 }}
        zIndex={-1}
      >
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              borderRadius={"xl"}
              border={"4px"}
              borderColor={"gold.300"}
              src={images[currentImageIndex]}
              alt={"Background"}
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              objectFit="cover"
              opacity={1}
            />
          </motion.div>
        </AnimatePresence>
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
            Utensils{" "}
            <Text as={"span"} color={"gold.400"}>
              made easy
            </Text>
          </Heading>
          <Text
            fontWeight={600}
            color={"gray.500"}
            maxW={{ base: "lg", md: "2xl" }}
          >
            With Easy Pack, discover the seamless blend of functionality and
            elegance with our range of essentials, designed to enhance your
            everyday needs.
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
            <Button leftIcon={<FaQuestion />} px={6} as={"a"} href="/about">
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
