import React from "react";
import { Box, Center, Skeleton, useColorModeValue } from "@chakra-ui/react";

export default function ProductEntrySkeleton() {
  return (
    <Center py={6}>
      <Box
        w={{ base: "50%", md: "100%" }}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        shadow={"base"}
        borderColor={"gold.300"}
      >
        <Box
          w={"400px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Skeleton h={"300px"} w={"375px"} />
        </Box>
        <Center h="100%" mt={{ base: 4, md: 6 }}>
          <Box w="100%">
            <Skeleton height="24px" mb={4} />
            <Skeleton height="16px" width="80%" mb={2} />
            <Skeleton height="16px" width="60%" mb={2} />
          </Box>
        </Center>
      </Box>
    </Center>
  );
}
