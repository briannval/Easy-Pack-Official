import { Product } from "@/types/contentful";
import {
  Box,
  Center,
  Heading,
  Stack,
  useColorModeValue,
  Image,
  Skeleton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  TableContainer,
  Table,
  TableCaption,
  Td,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import { useReducer } from "react";
import { useLocale } from "next-intl";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const l = useLocale();

  const productName = l === "id" ? product.indonesianName : product.name;

  const productDimensions: Record<string, number> | undefined =
    l === "id" ? product.indonesianDimensions : product.dimensions;

  return (
    <Center
      w={"full"}
      h={"full"}
      py={6}
      onMouseEnter={() => dispatch({ type: "SET_HOVERED", payload: true })}
      onMouseLeave={() => dispatch({ type: "SET_HOVERED", payload: false })}
      zIndex={1}
      onClick={onOpen}
    >
      <Box
        w={"370px"}
        h={"370px"}
        bg={"white"}
        zIndex={3}
        rounded={"md"}
        overflow={"hidden"}
        shadow={"base"}
        borderRadius={"xl"}
        border={state.isHovered ? "0.8px solid" : "none"}
      >
        <Box h={"280px"} w={"full"} bg={"gray.100"} mb={6} pos={"relative"}>
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
        <Center mt={{ base: 4, md: 6 }}>
          <Stack maxW={"85%"}>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"xl"}
              fontFamily={"body"}
              fontWeight={state.isHovered ? "extrabold" : "bold"}
              as={"h1"}
              id="product-name"
            >
              {productName.split("NEWLINE").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < productName.split("NEWLINE").length - 1 && <br />}
                </span>
              ))}
            </Heading>
          </Stack>
        </Center>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size={"sm"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{productName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table variant="simple" size={"sm"}>
                <Thead>
                  <Tr>
                    <Th>{l == "id" ? "Dimensi" : "Dimension"}</Th>
                    <Th isNumeric>
                      {l == "id" ? "Pengukuran (cm)" : "Measurement (cm)"}
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {productDimensions &&
                    Object.entries(productDimensions).map(
                      ([k, v]: [string, number]) => (
                        <Tr>
                          <Td>{k}</Td>
                          <Td isNumeric>{v}</Td>
                        </Tr>
                      ),
                    )}
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button
              color={"white"}
              bg={"gold.400"}
              _hover={{
                bg: "gold.300",
              }}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}
