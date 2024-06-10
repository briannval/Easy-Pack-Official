"use client";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <InputGroup ml={"auto"} mr={"auto"}>
      <InputLeftElement>
        <Icon as={FiSearch} />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search for products"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </InputGroup>
  );
}
