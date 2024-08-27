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
import { useTranslations } from "next-intl";
import { QualityProps } from "@/types/components";

function QualitiesGrid() {
  const t = useTranslations("Components.Qualities");

  const qualities: QualityProps[] = [
    {
      icon: FaStar,
      title: t("premium"),
      description: t("premiumdescription"),
    },
    {
      icon: FaShieldAlt,
      title: t("durable"),
      description: t("durabledescription"),
    },
    {
      icon: FaBoxesStacked,
      title: t("stackable"),
      description: t("stackabledescription"),
    },
  ];

  return (
    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      spacing={{ base: 20, md: 24 }}
      aria-hidden
    >
      {qualities.map((quality, index) => (
        <VStack key={index}>
          <Icon as={quality.icon} width={10} h={10} color={"gold.400"} />
          <Heading size={"lg"} my={4} as={"h1"}>
            {quality.title}
          </Heading>
          <Text
            align={"center"}
            maxW={"80%"}
            as={"h3"}
            id="quality-description"
          >
            {quality.description}
          </Text>
        </VStack>
      ))}
    </SimpleGrid>
  );
}

export default function Qualities() {
  const t = useTranslations("Components.Qualities");

  return (
    <Container maxW={"container.xl"} py={12}>
      <Center mt={4}>
        <VStack spacing={4} textAlign={"center"}>
          <Heading size={"2xl"} mb={12} as={"h1"} id="qualities-heading">
            {t("heading")}{" "}
            <Text as={"span"} color="gold.400">
              {t("different")}.
            </Text>
          </Heading>
          <QualitiesGrid />
        </VStack>
      </Center>
    </Container>
  );
}
