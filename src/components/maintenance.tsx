"use client";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function Maintenance() {
  return (
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
          <CloseIcon boxSize={"20px"} color={"white"} />
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        We'll be back soon!
      </Heading>
      <Text color={"gray.500"}>
        This page is currently undergoing maintenance.<br></br> We should be
        back shortly. Thank you for your patience.
      </Text>
    </Box>
  );
}
