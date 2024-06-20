import {
  Center,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaShieldAlt, FaStar } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";
import AnimatedHeading from "./animatedHeading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const itemVariants = {
  hidden: { opacity: 0, scale: 1.2 },
  visible: { opacity: 1, scale: 1 },
};

const MotionSimpleGrid = motion(SimpleGrid);

function QualitiesGrid() {
  const ref = useRef(null);
  const inViewAmount = useBreakpointValue({ base: 0.3, md: 0.7 });
  const isInView = useInView(ref, { amount: inViewAmount });

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
            <Text align={"center"} maxW={"80%"}>
              {quality.description}
            </Text>
          </VStack>
        </motion.div>
      ))}
    </MotionSimpleGrid>
  );
}

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
          <QualitiesGrid />
        </VStack>
      </Center>
    </Container>
  );
}
