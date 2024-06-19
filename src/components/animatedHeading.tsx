import { Heading, Text, chakra } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedHeadingProps = {
  text: string;
  size: string;
  my: number;
};

const defaultAnimations = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StyledMotionSpan = chakra(motion.span, {
  baseStyle: {
    display: "inline-block",
    whiteSpace: "pre",
  },
});

export default function AnimatedHeading({
  text,
  size,
  my,
}: AnimatedHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });

  return (
    <Heading size={size} my={my}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.025 }}
        aria-hidden
      >
        {text.split("").map((char, index) => (
          <StyledMotionSpan key={index} variants={defaultAnimations}>
            {char}
          </StyledMotionSpan>
        ))}
      </motion.span>
    </Heading>
  );
}
