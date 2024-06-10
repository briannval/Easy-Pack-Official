"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  Heading,
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z
    .string()
    .min(1, "Please enter a message")
    .max(500, "Message is too long"),
});

type Form = z.infer<typeof schema>;

export default function Contact() {
  const statusToast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Form>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Form) => {
    console.log(data);
  };

  return (
    <main>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        px={2}
        pt={10}
        alignItems={"center"}
        spacing={10}
      >
        <Box width={"100%"}></Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack align={"start"} width={"100%"} spacing={4}>
            <Heading as={"h1"} size={"xl"}>
              Have any questions?
            </Heading>
            <FormControl isInvalid={Boolean(errors.name)}>
              <Stack spacing={4}>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  disabled={isSubmitting}
                  w={{ base: "100%", sm: "sm" }}
                  size="lg"
                  {...register("name")}
                />
              </Stack>
              <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.name)}>
              <Stack spacing={4}>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  disabled={isSubmitting}
                  w={{ base: "100%", sm: "sm" }}
                  size="lg"
                  {...register("email")}
                />
              </Stack>
              <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.phone)}>
              <Stack spacing={4}>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  disabled={isSubmitting}
                  w={{ base: "100%", sm: "sm" }}
                  size="lg"
                  {...register("phone")}
                />
              </Stack>
              <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.message)}>
              <Stack spacing={4}>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  disabled={isSubmitting}
                  w={{ base: "100%", sm: "sm" }}
                  size="lg"
                  {...register("message")}
                  h="150px" // Adjust the height as needed
                />
              </Stack>
              <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
            </FormControl>
            <Button
              mt="2"
              type="submit"
              loadingText="Submitting..."
              size="lg"
              rightIcon={<Icon as={FiArrowRight} />}
              isLoading={isSubmitting}
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </SimpleGrid>
    </main>
  );
}
