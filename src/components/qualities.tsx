import {
  Center,
  Container,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import {
  FaMoneyBill,
  FaShieldAlt,
  FaStackExchange,
  FaStar,
} from "react-icons/fa";
import { FaBoxesStacked, FaDiamond, FaDiamondTurnRight } from "react-icons/fa6";

export default function Qualities() {
  return (
    <Container maxW={"container.xl"} py={12}>
      <Center mt={4}>
        <VStack spacing={4}>
          <Heading size={"2xl"} mb={12}>
            Discover what makes us{" "}
            <Text as={"span"} color="gold.400">
              different.
            </Text>
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 20, md: 24 }}
          >
            <VStack>
              <Icon as={FaStar} width={10} h={10} color={"gold.400"} />
              <Heading size={"lg"} fontWeight={"medium"}>
                Premium
              </Heading>
              <Text align={"center"} maxW={"80%"}>
                We never fail to deliver state-of-the-art products with
                insurmountable quality.
              </Text>
            </VStack>
            <VStack>
              <Icon as={FaShieldAlt} width={10} h={10} color={"gold.400"} />
              <Heading size={"lg"} fontWeight={"medium"}>
                Durable
              </Heading>
              <Text align={"center"} maxW={"80%"}>
                Our products are designed with high-quality materials to
                withstand everyday wear and tear.
              </Text>
            </VStack>
            <VStack>
              <Icon as={FaBoxesStacked} width={10} h={10} color={"gold.400"} />
              <Heading size={"lg"} fontWeight={"medium"}>
                Stackable
              </Heading>
              <Text align={"center"} maxW={"80%"}>
                Containers are built to stack neatly, efficiently maximizing
                your storage potential.
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Center>
    </Container>
  );
}
