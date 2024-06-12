"use client";
import Mission from "@/components/mission";
import Qualities from "@/components/qualities";
import { Center, Container, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <main>
      <Container maxW={"5xl"} minH={"calc(100vh - 60px)"} mt={"60px"} py={20}>
        <VStack spacing={12}>
          <Mission />
          <Qualities />
        </VStack>
      </Container>
    </main>
  );
}
