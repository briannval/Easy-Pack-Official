import { Product } from "@/types/contentful";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ProductEntry({ product }: { product: Product }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Center
      w={"full"}
      h={"full"}
      py={6}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      zIndex={1}
    >
      <Box
        w={"370px"}
        h={"350px"}
        bg={"white"}
        zIndex={3}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        shadow={"base"}
        borderRadius={"xl"}
        border={isHovered ? "0.8px solid" : "none"}
      >
        {!isHovered && (
          <Box
            w={"370px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image
              src={product.image_url}
              h={"280px"}
              w={"375px"}
              objectFit={"fill"}
              onLoad={() => setLoading(false)}
              style={{ display: !loading ? "block" : "none" }}
            />
          </Box>
        )}
        {loading && <Skeleton h={"300px"} w={"375px"} />}
        <Center mt={{ base: 4, md: 6 }}>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={isHovered ? "2xl" : "xl"}
              fontFamily={"body"}
              fontWeight={isHovered ? "extrabold" : "bold"}
              as={"h1"}
            >
              {product.name}
            </Heading>
            <Text color={"gray.500"} textAlign={"center"} as={"h3"}>
              {product.description}
            </Text>
          </Stack>
        </Center>
      </Box>
    </Center>
  );
}
