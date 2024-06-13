import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export default function ProductEntry() {
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
          <Image
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Box>
        <Center h={"100%"} mt={{ base: 4, md: 6 }}>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              Spork
            </Heading>
            <Text color={"gray.500"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              et ea rebum.
            </Text>
          </Stack>
        </Center>
      </Box>
    </Center>
  );
}
