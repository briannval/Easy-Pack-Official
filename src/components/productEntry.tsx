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
import { useReducer } from "react";

type State = {
  loading: boolean;
  isHovered: boolean;
};

type Action =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_HOVERED"; payload: boolean };

const initialState: State = {
  loading: true,
  isHovered: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_HOVERED":
      return { ...state, isHovered: action.payload };
    default:
      return state;
  }
};

export default function ProductEntry({ product }: { product: Product }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Center
      w={"full"}
      h={"full"}
      py={6}
      onMouseEnter={() => dispatch({ type: "SET_HOVERED", payload: true })}
      onMouseLeave={() => dispatch({ type: "SET_HOVERED", payload: false })}
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
        border={state.isHovered ? "0.8px solid" : "none"}
      >
        {(!state.isHovered || state.loading) && (
          <Box
            h={"280px"}
            w={"370px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
          >
            <Image
              src={product.image_url}
              w={"100%"}
              h={"100%"}
              objectFit={"fill"}
              onLoad={() => dispatch({ type: "SET_LOADING", payload: false })}
              style={{ display: !state.loading ? "block" : "none" }}
            />
            {state.loading && <Skeleton h={"280px"} w={"375px"} />}
          </Box>
        )}
        <Center mt={{ base: 4, md: 6 }}>
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={state.isHovered ? "2xl" : "xl"}
              fontFamily={"body"}
              fontWeight={state.isHovered ? "extrabold" : "bold"}
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
