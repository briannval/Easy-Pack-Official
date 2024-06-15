import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface wordsProps {
  id: number;
  content: string;
}

const words: wordsProps[] = [
  {
    id: 1,
    content: "thinwall",
  },
  {
    id: 2,
    content: "sporks",
  },
  {
    id: 3,
    content: "knives",
  },
];

export default function RotatingWords() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box display="flex" alignItems="center" ml={"auto"} mr={"auto"}>
      <AnimatePresence>
        <Box>
          <Text as="span" color="gold.400">
            Easy pack
          </Text>
        </Box>
        <Box
          position="relative"
          display="flex"
          width={{ base: "110px", md: "250px" }}
          ml={{base: 2.5, md: 4}}
        >
          <motion.div
            key={words[index].id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ ease: "easeInOut" }}
          >
            {words[index].content}
          </motion.div>
        </Box>
      </AnimatePresence>
    </Box>
  );
}
