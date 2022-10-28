import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

export const Footer = () => {
  return (
    <Flex
      w="100%"
      h={["16rem", "16rem", "8rem"]}
      justifyContent="center"
      alignItems="center"
      bgColor="greyScale.grey0"
    >
      <Flex
        w="inherit"
        padding={["0 4rem"]}
        justifyContent="space-between"
        alignItems="center"
        flexDirection={["column", "column", "row"]}
        gridGap="30px"
      >
        <Image src="src\assets\LogoBW.svg" alt="logo" w="150px" />

        <Text color="greyScale.whiteFixed" alignSelf="center">
          &copy; 2022 - Todos os direitos reservados.
        </Text>

        <Button
          as="a"
          w="53px"
          h="50px"
          bgColor="greyScale.grey1"
          color="greyScale.whiteFixed"
          _hover={{ bgColor: "greyScale.grey2" }}
        >
          <ChevronUpIcon />
        </Button>
      </Flex>
    </Flex>
  );
};
