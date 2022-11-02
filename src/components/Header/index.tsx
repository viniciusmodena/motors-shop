import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Flex,
  Show,
  Hide,
  Link,
  Divider,
  Button,
  Text,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({
    first_name: "Vinicius",
    last_name: "Modena",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const user = JSON.parse(localStorage.getItem("user") || "");

  // useEffect(() => {
  //   if (user != "") {
  //     setAuthenticated(true);
  //   }
  // }, []);

  const login = () => {
    setAuthenticated(true);
  };
  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <header>
      <nav>
        <Flex
          direction="row"
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          px="60px"
          height="80px"
          bg="greyScale.grey10"
          borderBottom="2px solid"
          borderColor={"greyScale.grey6"}
        >
          {/* Logo */}
          <Link variant="logo" href="/">
            Motors <span style={{ fontSize: "16px" }}>shop</span>
          </Link>
          {/* NavBar widescreen */}
          <Hide breakpoint="(max-width: 900px)">
            <Flex gap="44px" h="100%" alignItems="center">
              {/* NavLinks */}
              <Flex gap="44px">
                {authenticated ? (
                  <>
                    <Link size="sm" variant={"authenticated"}>
                      Carros
                    </Link>
                    <Link size="sm" variant={"authenticated"}>
                      Motos
                    </Link>
                    <Link size="sm" variant={"authenticated"}>
                      Leilão
                    </Link>
                  </>
                ) : (
                  <>
                    <Link size="sm" variant={"notAuthenticated"}>
                      Carros
                    </Link>
                    <Link size="sm" variant={"notAuthenticated"}>
                      Motos
                    </Link>
                    <Link size="sm" variant={"notAuthenticated"}>
                      Leilão
                    </Link>
                  </>
                )}
              </Flex>
              <Divider
                orientation="vertical"
                w="1px"
                h="100%"
                bg="greyScale.grey6"
              />
              {/* Authentication session */}
              {authenticated ? (
                <Menu isOpen={isOpen} matchWidth={true} gutter={-10}>
                  <MenuButton
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                    h="100%"
                  >
                    <Flex
                      direction="row"
                      alignItems="center"
                      gap="8px"
                      minWidth={"170px"}
                    >
                      <Avatar
                        h="32px"
                        w="32px"
                        size="sm"
                        fontWeight="700"
                        bg="brand.brand2"
                        color="greyScale.whiteFixed"
                        name={`${user.first_name} ${user.last_name}`}
                      />
                      <Text size="sm">
                        {user.first_name} {user.last_name}
                      </Text>
                    </Flex>
                  </MenuButton>
                  <MenuList
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                    minWidth="200px"
                  >
                    <MenuItem
                      fontWeight="400"
                      lineHeight="28px"
                      fontSize="16px"
                      color="greyScale.grey2"
                    >
                      Editar Perfil
                    </MenuItem>
                    <MenuItem
                      fontWeight="400"
                      lineHeight="28px"
                      fontSize="16px"
                      color="greyScale.grey2"
                    >
                      Editar Endereço
                    </MenuItem>
                    <MenuItem
                      fontWeight="400"
                      lineHeight="28px"
                      fontSize="16px"
                      color="greyScale.grey2"
                    >
                      Minhas Compras
                    </MenuItem>
                    <MenuItem
                      fontWeight="400"
                      lineHeight="28px"
                      fontSize="16px"
                      color="greyScale.grey2"
                      onClick={logout}
                    >
                      Sair
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Flex gap="44px" alignItems="center">
                  <Button
                    size={"lg"}
                    bg={"transparent"}
                    color="greyScale.grey2"
                    justifyContent={"flex-start"}
                    p={"0"}
                    my={"8px"}
                    onClick={login}
                  >
                    Fazer Login
                  </Button>
                  <Button
                    size="lg"
                    bg="greyScale.whiteFixed"
                    border="1.5px solid"
                    borderColor={"greyScale.grey4"}
                    color={"greyScale.grey0"}
                  >
                    Cadastrar
                  </Button>
                </Flex>
              )}
            </Flex>
          </Hide>
          {/* Menu Mobile */}
          <Show breakpoint="(max-width: 900px)">
            <Menu matchWidth={false} gutter={20}>
              {({ isOpen }) => (
                <>
                  <MenuButton as={IconButton} bg="transparent">
                    {isOpen ? (
                      <CloseIcon w={"12px"} h={"18px"} fontWeight={"900"} />
                    ) : (
                      <HamburgerIcon w={"16px"} h={"21px"} fontWeight={"900"} />
                    )}
                  </MenuButton>
                  <MenuList
                    minWidth="100vw"
                    borderTopRadius={"0px"}
                    p={"32px 16px"}
                  >
                    <MenuItem
                      fontWeight="600"
                      lineHeight="28px"
                      fontSize="16px"
                      color="greyScale.grey2"
                      py="22px"
                    >
                      Carros
                    </MenuItem>
                    <MenuItem
                      fontWeight="600"
                      lineHeight="28px"
                      fontSize="16px"
                      color="greyScale.grey2"
                      py="22px"
                    >
                      Motos
                    </MenuItem>
                    <MenuItem
                      fontWeight="600"
                      lineHeight="28px"
                      fontSize="16px"
                      color="greyScale.grey2"
                      py="22px"
                    >
                      Leilão
                    </MenuItem>
                    <MenuDivider />
                    {authenticated ? (
                      <Flex
                        direction={"column"}
                        justifyContent={"center"}
                        alignItems={"stretch"}
                        gap={"11px"}
                        padding={"32px 12px"}
                      >
                        <Button
                          size={"lg"}
                          bg={"transparent"}
                          color="greyScale.grey2"
                          justifyContent={"flex-start"}
                          p={"0"}
                          my={"8px"}
                        >
                          Editar Perfil
                        </Button>
                        <Button
                          size={"lg"}
                          bg={"transparent"}
                          color="greyScale.grey2"
                          justifyContent={"flex-start"}
                          p={"0"}
                          my={"8px"}
                        >
                          Editar Endereço
                        </Button>
                        <Button
                          size={"lg"}
                          bg={"transparent"}
                          color="greyScale.grey2"
                          justifyContent={"flex-start"}
                          p={"0"}
                          my={"8px"}
                        >
                          Minhas Compras
                        </Button>
                        <Button
                          size={"lg"}
                          bg={"transparent"}
                          color="greyScale.grey2"
                          justifyContent={"flex-start"}
                          p={"0"}
                          my={"8px"}
                          onClick={logout}
                        >
                          Sair
                        </Button>
                      </Flex>
                    ) : (
                      <Flex
                        direction={"column"}
                        justifyContent={"center"}
                        alignItems={"stretch"}
                        gap={"44px"}
                        padding={"32px 12px"}
                      >
                        {/* <Link
                          size="sm"
                          variant={"notAuthenticated"}
                          onClick={login}
                        >
                          Fazer Login
                        </Link> */}
                        <Button
                          size={"lg"}
                          bg={"transparent"}
                          color="greyScale.grey2"
                          justifyContent={"flex-start"}
                          p={"0"}
                          my={"8px"}
                          onClick={login}
                        >
                          Fazer Login
                        </Button>
                        <Button
                          size="lg"
                          bg="greyScale.whiteFixed"
                          border="1.5px solid"
                          borderColor={"greyScale.grey4"}
                          color={"greyScale.grey0"}
                        >
                          Cadastrar
                        </Button>
                      </Flex>
                    )}
                  </MenuList>
                </>
              )}
            </Menu>
          </Show>
        </Flex>
      </nav>
    </header>
  );
};

const ProductCard = () => {
  return (
    <>
      <Flex>Card</Flex>
    </>
  );
};

const ProductCardAuction = () => {
  return (
    <>
      <Flex>Card action</Flex>
    </>
  );
};
