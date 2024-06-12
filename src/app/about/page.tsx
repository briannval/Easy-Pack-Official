"use client";
import Faq from "@/components/faq";
import Mission from "@/components/mission";
import Qualities from "@/components/qualities";
import { Container, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <main>
      <Container maxW={"5xl"} minH={"calc(100vh - 60px)"} mt={"60px"} py={20}>
        <VStack spacing={12}>
          <Mission />
          <Qualities />
          <Faq />
        </VStack>
      </Container>
    </main>
  );
}
