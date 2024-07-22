"use client";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Container,
  Select,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useTransition, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import { useParams } from "next/navigation";
import { NavItem } from "@/types/components";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  const [scrollPosition, setScrollPosition] = useState(0);

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const t = useTranslations("Components.Navbar");
  const l = useLocale();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box as={"nav"} zIndex={500} position={"fixed"} w={"100%"} height={"60px"}>
      <Box w={"100%"} mr={"auto"} ml={"auto"}>
        <Container maxW={"container.xl"}>
          <Flex
            bgColor={`rgba(255, 255, 255, ${scrollPosition * 0.01})`}
            minH={"60px"}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={scrollPosition > 0 ? 1 : 0}
            borderStyle={"solid"}
            borderColor={`rgba(184, 138, 68, ${scrollPosition * 0.01})`}
            align={"center"}
          >
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <Image
                src="/icon.png"
                alt="Easy Pack"
                height={16}
                onClick={() => {
                  window.location.href = "/";
                }}
              />
              <Flex
                display={{ base: "none", md: "flex" }}
                align={"center"}
                flexGrow={1}
              >
                <DesktopNav />
              </Flex>
            </Flex>

            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={4}
            >
              <Select
                aria-label="Language Selector"
                w={"80px"}
                disabled={isPending}
                value={l}
                border={"none"}
                onChange={(e) => {
                  const newLocale = e.target.value;
                  startTransition(() => {
                    router.replace(
                      // @ts-expect-error -- TypeScript will validate that only known `params`
                      // are used in combination with a given `pathname`. Since the two will
                      // always match for the current route, we can skip runtime checks.
                      { pathname, params },
                      { locale: newLocale }
                    );

                    // hard refresh to avoid issues with the botpress webchat
                    window.location.href = `/${newLocale}${pathname}`;
                  });
                }}
              >
                <option value="en" id="en-language-switcher">EN</option>
                <option value="id" id="id-language-switcher">ID</option>
              </Select>
              <Button
                aria-label="Whatsapp CTA"
                width={"fit-content"}
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"gold.400"}
                _hover={{
                  bg: "gold.300",
                }}
                href="https://api.whatsapp.com/send?phone=62811938708&text=Halo,%20Easy%20Pack!"
                target="_blank"
                leftIcon={<FaWhatsapp />}
                id="chat-on-whatsapp"
              >
                {t("whatsappCTA")}
              </Button>
            </Stack>
          </Flex>
        </Container>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const t = useTranslations("Components.Navbar");

  return (
    <Stack
      direction={"row"}
      spacing={10}
      marginLeft={"auto"}
      marginRight={"auto"}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={`/${navItem.href}`}
                fontSize={"sm"}
                fontWeight={"bold"}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {t(navItem.label)}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={"white"}
      p={4}
      display={{ md: "none" }}
      mx={5}
      borderRadius={"lg"}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  const t = useTranslations("Components.Navbar");

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={`/${href}`}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {t(label)}
        </Text>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "home",
    href: "",
  },
  {
    label: "about",

    href: "about",
  },
  {
    label: "products",
    href: "products",
  },
  {
    label: "contact",
    href: "contact",
  },
];
