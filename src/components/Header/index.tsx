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
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Providers/users";

export const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const { auth, setAuth } = useUser();
  const [user, setUser] = useState({
    first_name: "Vinicius",
    last_name: "Modena",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  // const user = JSON.parse(localStorage.getItem("user") || "");

  // useEffect(() => {
  //   if (user != "") {
  //     setAuth(true);
  //   }
  // }, []);

  const login = () => {
    // navigate("/login")
    setAuth(true);
  };
  const logout = () => {
    setAuth(false);
  };

  return (
    <header>
      <nav>
        <Flex
          direction="row"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          px={{ base: "16px", md: "60px" }}
          height="80px"
          bg="greyScale.grey10"
          borderBottom="2px solid"
          borderColor={"greyScale.grey6"}
        >
          {/* Logo */}
          <Link variant="logo" onClick={() => navigate("/")}>
            Motors <span style={{ fontSize: "16px" }}>shop</span>
          </Link>
          {/* NavBar widescreen */}
          <Hide below="lg">
            <Flex gap="40px" h="100%" alignItems="center">
              {/* NavLinks */}
              <Flex gap="40px">
                {auth ? (
                  <>
                    <Link size="sm" variant={"w400"}>
                      Carros
                    </Link>
                    <Link size="sm" variant={"w400"}>
                      Motos
                    </Link>
                    <Link size="sm" variant={"w400"}>
                      Leilão
                    </Link>
                  </>
                ) : (
                  <>
                    <Link size="sm" variant={"w600"}>
                      Carros
                    </Link>
                    <Link size="sm" variant={"w600"}>
                      Motos
                    </Link>
                    <Link size="sm" variant={"w600"}>
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
              {auth ? (
                <Menu isOpen={isOpen} matchWidth={true} gutter={-10}>
                  <MenuButton
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                    h="100%"
                    minWidth={"170px"}
                  >
                    <Flex direction="row" alignItems="center" gap="8px">
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
                <Flex gap="40px" alignItems="center">
                  <Link variant={"w600"} onClick={login}>
                    Fazer Login
                  </Link>
                  <Button size="lg" variant={"outline"}>
                    Cadastrar
                  </Button>
                </Flex>
              )}
            </Flex>
          </Hide>
          {/* Menu Mobile */}
          <Hide above="lg">
            <Menu matchWidth={false} gutter={20}>
              {({ isOpen }) => (
                <>
                  <MenuButton as={IconButton} bg="transparent">
                    {isOpen ? (
                      <CloseIcon w={"12px"} h={"18px"} fontWeight={"900"} />
                    ) : (
                      <HamburgerIcon w={"16px"} h={"20px"} fontWeight={"900"} />
                    )}
                  </MenuButton>
                  <MenuList
                    minWidth="100vw"
                    borderTopRadius={"0"}
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
                    {auth ? (
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
                        gap={"40px"}
                        padding={"32px 12px"}
                      >
                        <Button
                          as={Link}
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
          </Hide>
        </Flex>
      </nav>
    </header>
  );
};
