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

  return (
    <Center py={6}>
      <Box
        w={"375px"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        shadow={"base"}
        borderColor={"gold.300"}
      >
        <Box
          w={"375px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={product.image_url}
            h={"300px"}
            w={"375px"}
            objectFit={"cover"}
            onLoad={() => setLoading(false)}
            style={{ display: !loading ? 'block' : 'none' }}
          />
          {loading && (
            <Skeleton
              h={"300px"}
              w={"375px"}
            />
          )}
        </Box>
        <Center h={"100%"} mt={{ base: 4, md: 6 }}>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {product.name}
            </Heading>
            <Text color={"gray.500"} textAlign={"center"}>
              {product.description}
            </Text>
          </Stack>
        </Center>
      </Box>
    </Center>
  );
}
