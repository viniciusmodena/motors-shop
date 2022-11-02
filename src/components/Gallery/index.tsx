import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import ModalGallery from "../ModalGallery";
import UserIconBox from "../UserIconBox";

const Gallery = ({ images }: any): JSX.Element => {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"flex-start"}
        py={"36px"}
        px={"44px"}
        bg={"greyScale.grey10"}
        borderRadius={"4px"}
        gap={"32px"}
      >
        <Heading variant={"h6"}>Fotos</Heading>
        <Grid
          gridTemplateColumns={{
            base: "repeat(auto-fill, minmax(max(90px, calc((100% - (5.5px*3)))/4), 1fr ))",
            lg: "repeat(3, 1fr)",
          }}
          gridColumnGap={{ base: "5.5px", lg: "14px" }}
          gridRowGap={{ base: "50px", lg: "32px" }}
          width={"100%"}
          maxWidth={{ lg: "440px" }}
          justifyContent={"center"}
          justifyItems={"center"}
        >
          {images.map((image: any, index: number) => (
            <GridItem
              key={index}
              onClick={() => navigate(`/advertise/gallery/${image.id}`)}
              cursor={"pointer"}
              display={"flex"}
              bg={"greyScale.grey7"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"10px"}
              borderRadius={"4px"}
              flex={"none"}
              flexGrow={0}
              flexShrink={1}
              order={index}
              px={"7px"}
              py={"27px"}
              maxWidth={{ base: "90px", lg: "108px" }}
              minWidth={"90px"}
              maxHeight={{ base: "90px", lg: "108px" }}
              minHeight={"90px"}
            >
              <Image
                src={image.url}
                alt={`Vehicle image ${index + 1}`}
                flex={"none"}
                flexGrow={0}
                flexShrink={1}
              />
            </GridItem>
          ))}
        </Grid>
        {/* <ModalGallery images={galleryImage} isOpen={isOpen} onClose={onClose} /> */}
      </Flex>
    </>
  );
};

export default Gallery;
