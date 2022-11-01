import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import UserIconBox from "../UserIconBox";

const Gallery = ({ images, user }: any): JSX.Element => {
  const redirectProfile = () => {};
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
                alt="car6"
                flex={"none"}
                flexGrow={0}
                flexShrink={1}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={"greyScale.grey10"}
        py={"36px"}
        px={"44px"}
        gap={"32px"}
      >
        <UserIconBox direction={"column"} username={user.name} />
        <Text variant={"body-1-400"} textAlign={"center"}>
          {user.description}
        </Text>
        <Button size={"lg"} variant={"grey1"} onClick={redirectProfile}>
          Ver todos anuncios
        </Button>
      </Flex>
    </>
  );
};

export default Gallery;
