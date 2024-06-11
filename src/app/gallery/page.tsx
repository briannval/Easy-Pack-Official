"use client";
import Maintenance from "@/components/maintenance";
import { Center } from "@chakra-ui/react";

export default function Gallery() {
  return (
    <main>
      <Center mt={"60px"} minH={"calc(100vh - 60px)"}>
        <Maintenance />
      </Center>
    </main>
  );
}
