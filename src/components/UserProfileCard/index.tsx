import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, users } from "../../data";

export const UserProfileCard = ({ user }: any) => {
  // const params = useParams()
  // const user = users.find((user)=> user.id === parseInt(params.user_id, 10))
  // const navigate = useNavigate()
  // if (!user) {
  //   navigate("/")
  // }

  return (
    <Flex
      padding={["4rem 1rem", "4rem 4rem", "4rem 6rem"]}
      justifyContent="center"
      alignItems="center"
      justifySelf="center"
      position="relative"
      zIndex="0"
    >
      <Flex
        position="absolute"
        w="100%"
        h="16rem"
        bgColor="brand.brand1"
        top="0"
        border="none"
      ></Flex>

      <Flex
        padding="2rem"
        bgColor="greyScale.grey10"
        zIndex="9"
        borderRadius="4px"
      >
        <Flex flexDirection="column">
          {user.image ? (
            <Image
              w="6rem"
              h="6rem"
              src={user.image}
              borderRadius="50%"
              marginBottom="1rem"
            />
          ) : (
            <Flex
              w="6rem"
              h="6rem"
              bgColor="brand.brand1"
              borderRadius="50%"
              marginBottom="1rem"
              justify="center"
              align="center"
              fontSize="3xl"
              color="greyScale.whiteFixed"
            >
              {user.name[0].toUpperCase()}
            </Flex>
          )}
          <Flex margin="1rem 0" columnGap="1rem">
            <Heading variant="h6" alignSelf="center">
              {user.name}
            </Heading>
            {user.is_seller ? (
              <Text
                bgColor="brand.brand4"
                color="brand.brand1"
                padding="0.25rem 0.5rem"
                borderRadius="4px"
              >
                Anunciante
              </Text>
            ) : (
              ""
            )}
          </Flex>
          <Text margin="1rem 0">{user.description}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
