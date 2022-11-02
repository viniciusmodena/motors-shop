import { ArrowLeftIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Navigate, redirect, useNavigate, useParams } from "react-router-dom";
import car1 from "../../assets/Cars/car1.png";
import car2 from "../../assets/Cars/car2.png";
import car3 from "../../assets/Cars/car3.png";
import car4 from "../../assets/Cars/car4.png";
import car5 from "../../assets/Cars/car5.png";
import car6 from "../../assets/Cars/car6.png";

const ModalGallery = () => {
  const images = [
    { id: "1", url: car1 },
    { id: "2", url: car2 },
    { id: "3", url: car3 },
    { id: "4", url: car4 },
    { id: "5", url: car5 },
    { id: "6", url: car6 },
  ];

  const navigate = useNavigate();

  const { image_id } = useParams();

  const image = images.find((el) => {
    return el.id === image_id;
  });

  console.log(image);

  if (!image) {
    return <Navigate to={"/advertise"} />;
  }

  return (
    <>
      {/* <Button onClick={onOpen}>Open</Button> */}
      <Modal isOpen={true} onClose={() => navigate("/advertise")}>
        <ModalOverlay />
        <ModalContent
          bg={"greyScale.whiteFixed"}
          borderRadius={"4px"}
          maxWidth={"520px"}
          mx={"16px"}
        >
          <ModalHeader padding={"0"}>
            <Flex
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              py={"16px"}
              px={{ base: "16px", lg: "24px" }}
              bg={"greyScale.whiteFixed"}
            >
              <Heading variant={"h7_500"}>Imagem do Veiculo</Heading>
              <ModalCloseButton position={"unset"} color={"greyScale.grey4"} />
            </Flex>
          </ModalHeader>
          <ModalBody py={"30px"} px={{ base: "16px", lg: "24px" }}>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              py={"27px"}
              px={"7px"}
              gap={"10px"}
              bg={"greyScale.grey7"}
              borderRadius={"4px"}
            >
              <Image
                src={image.url}
                flex={"none"}
                flexGrow={0}
                flexShrink={1}
                maxWidth={"380px"}
              />
              {/* <IconButton icon={<ArrowLeftIcon />} /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalGallery;
