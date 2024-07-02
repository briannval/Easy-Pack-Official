import { Box, Heading, Text } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

export default function NoProducts() {
  return (
    <Box textAlign="center" minH={"60vh"} pt={"32"}>
      <WarningTwoIcon boxSize={"50px"} color={"gold.400"} />
      <Heading as="h1" size="xl" mt={6} mb={2}>
        No products found.
      </Heading>
      <Text color={"gray.500"} as={"h3"}>
        Please try another keyword.
      </Text>
    </Box>
  );
}
