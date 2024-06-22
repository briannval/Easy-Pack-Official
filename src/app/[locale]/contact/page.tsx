"use client";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Icon,
  Img,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
  UseToastOptions,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import { z } from "zod";
import { sendMail } from "@/actions/sendMail";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Pages.Contact");
  const statusToast = useToast();
  const toastAttr: UseToastOptions = {
    position: "bottom-right",
    duration: 4000,
    isClosable: true,
  };
  const schema = z.object({
    name: z.string().min(1, t("invalidname")),
    email: z.string().email(t("invalidemail")),
    phone: z.string().min(10, t("invalidphone")),
    message: z
      .string()
      .min(1, t("invalidmessage"))
      .max(500, t("messagetoolong")),
  });

  type Form = z.infer<typeof schema>;
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Form>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Form) => {
    try {
      await sendMail(data.name, data.email, data.phone, data.message);
      statusToast({
        title: t("successtoast"),
        status: "success",
        ...toastAttr,
      });
    } catch (e) {
      statusToast({
        title: t("errortoast"),
        status: "error",
        ...toastAttr,
      });
    }
  };

  return (
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      px={2}
      mt={{ base: "0px", lg: "60px" }}
      py={{ base: 10, lg: 20 }}
      spacing={16}
      alignItems={"center"}
      minH={"calc(100vh - 60px)"}
    >
      <Box width={"100%"}>
        <Box display={{ base: "none", lg: "block" }} position="relative" px={2}>
          <Img
            src="/collageproducts.jpeg"
            alt="Solar Panel"
            borderRadius="xl"
            w="80%"
            h="xl"
            objectFit="fill"
            mr={"auto"}
            ml={"auto"}
            boxShadow={"dark-lg"}
          />
        </Box>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <VStack
            align={"start"}
            width={{ base: "100%", sm: "max-content" }}
            spacing={4}
            mx={"auto"}
          >
            <Heading as={"h1"} size={"2xl"}>
              {t("heading")}
            </Heading>
            <FormControl isInvalid={Boolean(errors.name)}>
              <Stack spacing={4}>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("nameplaceholder")}
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
                  placeholder={t("emailplaceholder")}
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
                  placeholder={t("phonenumberplaceholder")}
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
                  placeholder={t("messageplaceholder")}
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
              loadingText={t("submitting")}
              size="lg"
              rightIcon={<Icon as={FiArrowRight} />}
              isLoading={isSubmitting}
              colorScheme="yellow"
              variant={"outline"}
            >
              {t("submitbtn")}
            </Button>
          </VStack>
        </Box>
      </form>
    </SimpleGrid>
  );
}
