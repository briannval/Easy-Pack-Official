import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { replace } = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <IconButton
        onClick={() => createPageURL(currentPage - 1)}
        isDisabled={currentPage === 1}
        mr={2}
        icon={<FaArrowLeft />}
        aria-label="Previous page"
      >
        Previous
      </IconButton>
      <Text fontWeight="bold" mr={2}>
        {currentPage}
      </Text>
      <IconButton
        onClick={() => createPageURL(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        icon={<FaArrowRight />}
        aria-label="Next page"
      >
        Next
      </IconButton>
    </Flex>
  );
}
