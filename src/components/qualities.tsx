import {
  Center,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaShieldAlt, FaStar } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";

interface QualityProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const qualities: QualityProps[] = [
  {
    icon: FaStar,
    title: "Premium",
    description:
      "We never fail to deliver state-of-the-art products with insurmountable quality.",
  },
  {
    icon: FaShieldAlt,
    title: "Durable",
    description:
      "Our products are designed with high-quality materials to withstand everyday wear and tear.",
  },
  {
    icon: FaBoxesStacked,
    title: "Stackable",
    description:
      "Containers are built to stack neatly, efficiently maximizing your storage potential.",
  },
];

export default function Qualities() {
  return (
    <Container maxW={"container.xl"} py={12}>
      <Center mt={4}>
        <VStack spacing={4} textAlign={"center"}>
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
            {qualities.map((quality, index) => {
              return (
                <VStack key={index}>
                  <Icon
                    as={quality.icon}
                    width={10}
                    h={10}
                    color={"gold.400"}
                  />
                  <Heading size={"lg"} fontWeight={"medium"}>
                    {quality.title}
                  </Heading>
                  <Text align={"center"} maxW={"80%"}>
                    {quality.description}
                  </Text>
                </VStack>
              );
            })}
          </SimpleGrid>
        </VStack>
      </Center>
    </Container>
  );
}
