"use client";
import Faq from "@/components/faq";
import Mission from "@/components/mission";
import Qualities from "@/components/qualities";
import { Button, Container, Icon, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaUtensils } from "react-icons/fa";

export default function About() {
  const router = useRouter();

  return (
    <main>
      <Container maxW={"5xl"} minH={"calc(100vh - 60px)"} mt={"60px"} py={20}>
        <VStack spacing={24}>
          <Mission />
          <Qualities />
          <Faq />
          <Button
            mt="-12"
            type="submit"
            loadingText="Submitting..."
            size="lg"
            colorScheme="yellow"
            leftIcon={<Icon as={FaUtensils} />}
            variant={"outline"}
            onClick={() => router.push("/products")}
          >
            Browse Now
          </Button>
        </VStack>
      </Container>
    </main>
  );
}
