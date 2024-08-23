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
  Td,
  Thead,
  Tr,
  Th,
  Tbody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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

  const localizedText = {
    productName: l === "id" ? product.indonesianName : product.name,
    productDimensions:
      l === "id" ? product.indonesianDimensions : product.dimensions,
    productPacksPerCarton:
      l === "id" ? product.indonesianPacksPerCarton : product.packsPerCarton,
    productTotalQuantity:
      l === "id" ? product.indonesianTotalQuantity : product.totalQuantity,
    dimensionLabel: l === "id" ? "Dimensi Produk" : "Product Dimensions",
    packsPerCartonLabel: l === "id" ? "Jumlah Pack / Karton" : "Packs / Carton",
    quantityPerCartonLabel:
      l === "id" ? "Kuantitas / Karton" : "Quantity / Carton",
    quantityPerPackLabel: l === "id" ? "Kuantitas / Pack" : "Quantity / Pack",
    dimensionHeader: l === "id" ? "Dimensi" : "Dimension",
    measurementHeader: l === "id" ? "Pengukuran (cm)" : "Measurement (cm)",
    closeButtonLabel: l === "id" ? "Tutup" : "Close",
  };

  const productImageUrl = product.image_url;
  const productQuantityPerPack = product.quantityPerPack;

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
            src={productImageUrl}
            w={"100%"}
            h={"100%"}
            objectFit={"cover"}
            onLoad={() => dispatch({ type: "SET_LOADING", payload: false })}
            style={{ display: !state.loading ? "block" : "none" }}
            rounded={"xl"}
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
              {localizedText.productName.split("NEWLINE").map((line, index) => (
                <span key={index}>
                  {line}
                  {index <
                    localizedText.productName.split("NEWLINE").length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </Heading>
          </Stack>
        </Center>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size={"sm"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={"bold"} fontSize={"xl"}>
            {localizedText.productName}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={productImageUrl}
              w={"100%"}
              h={"100%"}
              objectFit={"cover"}
              mb={4}
              rounded={"xl"}
            />
            <Accordion allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontWeight={"medium"}>
                    {localizedText.dimensionLabel}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {/* Allow scrollbar always intact */}
                  <TableContainer
                    overflowY={"scroll"}
                    overflowX={"hidden"}
                    maxH={"200px"}
                    sx={{
                      "::-webkit-scrollbar": {
                        width: "10px",
                      },
                      "::-webkit-scrollbar-track": {
                        background: "#f1f1f1",
                      },
                      "::-webkit-scrollbar-thumb": {
                        background: "#888",
                      },
                      "::-webkit-scrollbar-thumb:hover": {
                        background: "#555",
                      },
                    }}
                  >
                    <Table variant="simple" size={"sm"}>
                      <Thead>
                        <Tr>
                          <Th>{localizedText.dimensionHeader}</Th>
                          <Th isNumeric>{localizedText.measurementHeader}</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {localizedText.productDimensions &&
                          Object.entries(localizedText.productDimensions).map(
                            (
                              [k, v]: [string, number | string[] | number[]],
                              i: number
                            ) =>
                              Array.isArray(v) ? (
                                v.map((v_el: string | number, i_el: number) => (
                                  <Tr key={i_el}>
                                    <Td>{k}</Td>
                                    <Td isNumeric>{v_el}</Td>
                                  </Tr>
                                ))
                              ) : (
                                <Tr key={i}>
                                  <Td>{k}</Td>
                                  <Td isNumeric>{v}</Td>
                                </Tr>
                              )
                          )}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
              {localizedText.productPacksPerCarton && (
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight={"medium"}>
                      {localizedText.packsPerCartonLabel}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    {localizedText.productPacksPerCarton}
                  </AccordionPanel>
                </AccordionItem>
              )}
              {localizedText.productTotalQuantity && (
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight={"medium"}>
                      {localizedText.quantityPerCartonLabel}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    {localizedText.productTotalQuantity}
                  </AccordionPanel>
                </AccordionItem>
              )}
              {productQuantityPerPack && (
                <AccordionItem>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight={"medium"}>
                      {localizedText.quantityPerPackLabel}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>{productQuantityPerPack}</AccordionPanel>
                </AccordionItem>
              )}
            </Accordion>
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
              {localizedText.closeButtonLabel}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}
