import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import { authUser, getUser, users } from "../../data";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AdvertiseModal } from "../AdvertiseModal";

export const UserProfileCard = ({ user }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const params = useParams();
  const is_owner = params.user_id === authUser.id;

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
          {is_owner && (
            <Button
              size="sm"
              padding="1.5rem 0"
              w="10rem"
              border="1px solid #4529E6"
              bgColor="greyScale.grey10"
              color="#4529E6"
              _hover={{
                bg: "#EDEAFD",
              }}
              onClick={onOpen}
            >
              Criar anuncio
            </Button>
          )}
          <AdvertiseModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          {/* <Modal
            isOpen={isOpen}
            onClose={onClose}
            blockScrollOnMount={false}
            size="lg"
          >
            <ModalOverlay />
            <ModalContent color="greyScale.grey0">
              <ModalHeader>
                <Heading variant={"h7_500"}>Criar anuncio</Heading>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody color="greyScale.grey0">
                <Text variant={"body-2-500"} color="greyScale.grey0">
                  Tipo de anúncio
                </Text>
                <Flex
                  justifyContent={"space-between"}
                  columnGap="10px"
                  flex="flex-grow"
                >
                  <Button
                    size="lg"
                    width={"50%"}
                    border="1px solid #ADB5BD"
                    bg="greyScale.whiteFixed"
                    _focus={{
                      bg: "brand.brand1",
                      color: "greyScale.whiteFixed",
                    }}
                  >
                    Venda
                  </Button>
                  <Button
                    size="lg"
                    width={"50%"}
                    border="1px solid #ADB5BD"
                    bg="greyScale.whiteFixed"
                    _focus={{
                      bg: "brand.brand1",
                      color: "greyScale.whiteFixed",
                    }}
                  >
                    Leilão
                  </Button>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal> */}
        </Flex>
      </Flex>
    </Flex>
  );
};
