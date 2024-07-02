import {
  Center,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaShieldAlt, FaStar } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";
import AnimatedHeading from "./animatedHeading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { QualityProps } from "@/types/components";

const itemVariants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1 },
};

const MotionSimpleGrid = motion(SimpleGrid);

function QualitiesGrid() {
  const ref = useRef(null);
  const inViewAmount = useBreakpointValue({ base: 0.3, md: 0.7 });
  const isInView = useInView(ref, { amount: inViewAmount });
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
    <MotionSimpleGrid
      ref={ref}
      columns={{ base: 1, md: 3 }}
      spacing={{ base: 20, md: 24 }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.1 }}
      aria-hidden
    >
      {qualities.map((quality, index) => (
        <motion.div key={index} variants={itemVariants}>
          <VStack>
            <Icon as={quality.icon} width={10} h={10} color={"gold.400"} />
            <AnimatedHeading text={quality.title} size="lg" my={4} />
            <Text align={"center"} maxW={"80%"} as={"h3"}>
              {quality.description}
            </Text>
          </VStack>
        </motion.div>
      ))}
    </MotionSimpleGrid>
  );
}

export default function Qualities() {
  const t = useTranslations("Components.Qualities");

  return (
    <Container maxW={"container.xl"} py={12}>
      <Center mt={4}>
        <VStack spacing={4} textAlign={"center"}>
          <Heading size={"2xl"} mb={12} as={"h1"}>
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
