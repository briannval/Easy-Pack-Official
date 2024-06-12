import { Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const images: string[] = ["/home1.jpeg", "/home2.jpeg"];

export default function RotatingImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          borderRadius={"xl"}
          border={"4px"}
          borderColor={"gold.300"}
          src={images[currentImageIndex]}
          alt={"Background"}
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          objectFit="cover"
          opacity={0.8}
        />
      </motion.div>
    </AnimatePresence>
  );
}
