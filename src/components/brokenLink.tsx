import { Box, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function BrokenLink() {
  return (
    <Box textAlign="center" minH={"60vh"} pt={"32"}>
      <CloseIcon boxSize={"50px"} color={"gold.400"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Page not found.
      </Heading>
      <Text color={"gray.500"}>Please return to the homepage.</Text>
    </Box>
  );
}
