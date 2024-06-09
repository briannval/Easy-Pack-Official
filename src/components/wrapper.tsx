"use client";

import { Box } from "@chakra-ui/react";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Box maxW={"container.xl"} minH={"620px"}>
      {children}
    </Box>
  );
};
