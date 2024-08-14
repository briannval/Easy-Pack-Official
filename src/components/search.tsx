"use client";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { useDebouncedCallback } from "use-debounce";
import { useTranslations } from "next-intl";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const t = useTranslations("Components.Search");

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 150);

  return (
    <InputGroup ml={"auto"} mr={"auto"}>
      <InputLeftElement>
        <Icon as={FiSearch} />
      </InputLeftElement>
      <Input
        aria-label="Search"
        type="text"
        placeholder={t("placeholder")}
        defaultValue={searchParams.get("query")?.toString() || ""}
        onChange={(e) => handleSearch(e.target.value)}
        id="product-search-bar"
      />
    </InputGroup>
  );
}
