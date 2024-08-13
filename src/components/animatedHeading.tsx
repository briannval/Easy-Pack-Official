import { Heading, Text, chakra } from "@chakra-ui/react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.8 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, controls]);

  return (
    <Heading size={size} my={my} as={"h1"}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
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
