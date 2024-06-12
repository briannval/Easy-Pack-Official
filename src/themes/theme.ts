"use client";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
    },
    gold: {
      50: "#FAF9D0",
      100: "#E0AA3E",
      200: "#F9F295",
      300: "#B88A44",
      400: "#E0AA3E",
      500: "#EDC967",
    },
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
});
