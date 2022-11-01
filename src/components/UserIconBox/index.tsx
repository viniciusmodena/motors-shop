import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";

const UserIconBox = ({
  username,
  direction = "row",
}: string | any): JSX.Element => {
  return (
    <>
      {direction === "row" ? (
        <Flex direction={direction} alignItems="center" gap="8px">
          <Avatar
            h="32px"
            w="32px"
            size="sm"
            fontWeight="700"
            bg="brand.brand2"
            color="greyScale.whiteFixed"
            name={username}
          />
          <Text size="sm">{username}</Text>
        </Flex>
      ) : (
        <Flex direction={direction} alignItems="center" gap="28px">
          <Avatar
            h="104px"
            w="104px"
            size="3xl"
            fontWeight="500"
            fontSize={"3xl"}
            bg="brand.brand2"
            color="greyScale.whiteFixed"
            name={username}
          />
          <Heading variant={"h6"}>{username}</Heading>
        </Flex>
      )}
    </>
  );
};

export default UserIconBox;
