"use client";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { BiCake, BiKnife } from "react-icons/bi";
import { GoContainer } from "react-icons/go";
import AnimatedHeading from "./animatedHeading";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={500} color={"gray.600"}>
        {text}
      </Text>
    </Stack>
  );
};

export default function Mission() {
  return (
    <Container maxW={"container.xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} minH={"50vh"}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={4}>
          <AnimatedHeading text="Why choose us?" size="2xl" my={2} />
          <Text color={"gray.500"} fontSize={"lg"} my={1}>
            Based in{" "}
            <Text as={"span"} color={"gold.300"} fontWeight={"600"}>
              Jakarta,{" "}
            </Text>
            we lead the way in food packaging solutions, empowering businesses
            with cutting-edge products and high-quality service.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={GoContainer} color={"white"} w={5} h={5} />}
              iconBg="gold.400"
              text={"Containers"}
            />
            <Feature
              icon={<Icon as={BiCake} color={"white"} w={5} h={5} />}
              iconBg="gold.400"
              text={"Cake bases"}
            />
            <Feature
              icon={<Icon as={BiKnife} color={"white"} w={5} h={5} />}
              iconBg="gold.400"
              text={"Knives"}
            />
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
