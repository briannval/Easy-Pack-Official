import React from "react";
import { Box, Center, Skeleton } from "@chakra-ui/react";

export default function ProductEntrySkeleton() {
  return (
    <Center w={"full"} h={"full"} py={6}>
      <Box
        w={"370px"}
        h={"350px"}
        bg={"white"}
        zIndex={3}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        shadow={"base"}
        borderRadius={"xl"}
      >
        <Box
          w={"370px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Skeleton h={"280px"} w={"375px"} />
        </Box>
        <Center mt={{ base: 4, md: 6 }}>
          <Skeleton height="20px" width="60%" />
        </Center>
      </Box>
    </Center>
  );
}
