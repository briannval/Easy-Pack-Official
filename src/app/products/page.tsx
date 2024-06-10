"use client";
import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export default function Products() {
  return (
    <main>
      <VStack align={"center"} spacing={4}>
        <Heading>Find what you're looking for.</Heading>
        <Center>
          <InputGroup size={"lg"} ml={"auto"} mr={"auto"}>
            <InputLeftElement>
              <Icon as={FiSearch} />
            </InputLeftElement>
            <Input type="text" placeholder="Search for products" />
          </InputGroup>
        </Center>
      </VStack>
    </main>
  );
}
