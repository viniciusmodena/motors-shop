import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Hide,
  Image,
  Show,
  Text,
  Textarea,
} from "@chakra-ui/react";
import UserIconBox from "../../components/UserIconBox";
import car6 from "../../assets/Cars/car6.png";
import { useState } from "react";
import Gallery from "../../components/Gallery";

const ProductPage = () => {
  const [auth, setAuth] = useState(true);
  const handleBuy = () => {};
  const handleComment = () => {};
  const redirectLogin = () => {};

  const images = [
    { url: car6 },
    { url: car6 },
    { url: car6 },
    { url: car6 },
    { url: car6 },
    { url: car6 },
  ];

  const user = {
    name: "Vinicius Modena",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  };

  const advertise = {
    cover: car6,
    vehicle: {
      name: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200",
      km: 0,
      year: "2013",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: "00.000,00",
    },
    comments: [
      {
        user: { name: "Samuel Leão" },
        comment: "Um comentario",
        created_at: new Date("2022-10-31"),
      },
      {
        user: { name: "Julia Lima" },
        comment: "Outro comentario",
        created_at: new Date("2022-10-30"),
      },
    ],
  };

  const getDaysFromPost = (postDate: Date) => {
    const today = new Date();

    const diffTime = today.getTime() - postDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <Container
      maxWidth={"100%"}
      height={"100vh"}
      px={"12px"}
      bg={
        "linear-gradient(180deg, #4529E6 31.25%, #F1F3F5 31.26%, #F1F3F5 100%);"
      }
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent={"center"}
        alignItems={{ base: "center", lg: "flex-start" }}
        paddingTop={"40px"}
        mx={"auto"}
        gap={"46px"}
      >
        {/* Left Column */}
        <Flex
          direction={"column"}
          gap={"16px"}
          maxWidth={{ base: "360px", sm: "648px", lg: "752px" }}
        >
          {/* Advertise Cover */}
          <Flex
            bg={"greyScale.grey10"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
            borderRadius={"4px"}
            flex={"none"}
            flexGrow="1"
          >
            <Image
              src={car6}
              alt="car6"
              flex={"none"}
              flexGrow={0}
              flexShrink={1}
              maxWidth={{ lg: "441px" }}
            />
          </Flex>
          {/* Advertise Details */}
          <Flex direction={"column"} gap={"39px"}>
            {/* Vehicle Data */}
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              gap={"8px"}
              py={"1.75rem"}
              px={"2.75rem"}
              bg={"greyScale.grey10"}
              borderRadius={"4px"}
            >
              <Flex
                direction={"column"}
                justifyContent={"center"}
                alignItems={"flex-start"}
                py={"1rem"}
                gap={"41px"}
                width={"100%"}
                flex={"none"}
                flexGrow={0}
                order={0}
              >
                <Heading variant={"h6"} flex={"none"} flexGrow={1} order={0}>
                  {advertise.vehicle.name}
                  {/* Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 */}
                </Heading>
                <Flex
                  direction={{ base: "column", sm: "row" }}
                  justifyContent={{ base: "flex-end", sm: "space-between" }}
                  alignItems={{ base: "flex-start" }}
                  gap={"32px"}
                  width={"100%"}
                  flex={"none"}
                  flexGrow={0}
                  order={1}
                >
                  <Flex
                    direction={"row"}
                    gap={"12px"}
                    justifyContent={{
                      base: "flex-start",
                      sm: "space-between",
                    }}
                  >
                    <Box
                      bg={"brand.brand4"}
                      color={"brand.brand1"}
                      py={"4px"}
                      px={"8px"}
                      borderRadius={"4px"}
                    >
                      <Text variant={"body-2-500"} color={"brand.brand1"}>
                        {advertise.vehicle.year}
                        {/* 2013 */}
                      </Text>
                    </Box>
                    <Box
                      bg={"brand.brand4"}
                      py={"4px"}
                      px={"8px"}
                      borderRadius={"4px"}
                    >
                      <Text variant={"body-2-500"} color={"brand.brand1"}>
                        {advertise.vehicle.km} KM
                        {/* 0 KM */}
                      </Text>
                    </Box>
                  </Flex>
                  <Heading variant={"h7_500"}>
                    R$ {advertise.vehicle.price}
                  </Heading>
                  {/* <Heading variant={"h7_500"}>R$ 00.000,00</Heading> */}
                </Flex>
              </Flex>
              <Button
                size={"sm"}
                variant={"brand1"}
                flex={"none"}
                flexGrow={0}
                order={2}
                fontWeight={"600"}
                onClick={handleBuy}
              >
                Comprar
              </Button>
            </Flex>
            {/* Description  Box*/}
            <Flex
              direction={"column"}
              alignItems={"flex-start"}
              gap={"32px"}
              px={"44px"}
              py={"36px"}
              bg={"greyScale.grey10"}
              borderRadius={"4px"}
            >
              <Heading variant={"h6"}>Descrição</Heading>
              <Text variant={"body-1-400"}>{user.description}</Text>
            </Flex>
          </Flex>
          {/* Mobile Gallery */}
          <Hide above={"lg"}>
            <Flex
              direction={"column"}
              gap={"34px"}
              maxWidth={{ base: "360px", sm: "648px" }}
            >
              <Gallery images={images} user={user} />
            </Flex>
          </Hide>
          {/* Comments Section */}
          <Flex
            direction={"column"}
            alignItems={"flex-start"}
            gap={"24px"}
            px={"44px"}
            py={"36px"}
            marginBottom={{ base: "42px", lg: "33px" }}
            bg={"greyScale.grey10"}
            borderRadius={"4px"}
            maxWidth={{ base: "360px", sm: "648px", lg: "752px" }}
          >
            <Heading variant={"h6"}>Comentários</Heading>
            {/* Comments Box */}
            <Flex direction={"column"} alignItems={"flex-start"} gap={"44px"}>
              {advertise.comments.map((comment, index) => (
                <Flex direction={"column"} gap={"12px"} key={index}>
                  <Flex direction={"row"} alignItems={"center"} gap={"8px"}>
                    <UserIconBox username={comment.user.name} />
                    <Flex
                      direction={"row"}
                      gap={"13px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box
                        width={"4px"}
                        height={"4px"}
                        bg={"greyScale.grey4"}
                        borderRadius={"50%"}
                        border={"1px solid"}
                        borderColor={"greyScale.grey4"}
                      />
                      <Text
                        fontSize={"12px"}
                        fontWeight={"400"}
                        color={"greyScale.grey3"}
                        lineHeight={"24px"}
                      >
                        há {getDaysFromPost(comment.created_at)} dias
                      </Text>
                    </Flex>
                  </Flex>
                  <Text>{comment.comment}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
          {/* Create Comment Section */}
          <Flex
            direction={"column"}
            alignItems={"flex-start"}
            gap={{ base: "24px", sm: "15px" }}
            px={"44px"}
            py={"36px"}
            bg={"greyScale.grey10"}
            borderRadius={"4px"}
            maxWidth={{ base: "360px", sm: "648px", lg: "752px" }}
          >
            {!!auth ? <UserIconBox username={user.name} /> : null}
            {/* {!!auth ? <UserIconBox username="Samuel Leao" /> : null} */}

            {/* Comment Input */}
            <Flex
              direction={"column"}
              border={"1.5px solid"}
              borderColor={"greyScale.grey7"}
              borderRadius={"4px"}
              py={"13px"}
              px={"11px   "}
              gap={"13px"}
              width={"100%"}
              alignItems={"flex-end"}
            >
              {/* <Input
                  variant="unstyled"
                  size="lg"
                  px={"1rem"}
                  fontSize={"1rem"}
                  _
                  placeholder="Digitar comentário"
                  _placeholder={{
                    color: "greyScale.grey3",
                    fontSize: "1rem",
                  }}
                /> */}
              <Textarea
                px={"1rem"}
                fontSize={"1rem"}
                resize={"none"}
                border={"none"}
                _focusVisible={{
                  border: "none",
                }}
                placeholder="Digitar comentário"
                _placeholder={{
                  color: "greyScale.grey3",
                  fontSize: "1rem",
                }}
              />
              <Show above="sm">
                {!!auth ? (
                  <Button
                    variant={"brand1"}
                    size={"sm"}
                    onClick={handleComment}
                  >
                    Comentar
                  </Button>
                ) : (
                  <Button
                    variant={"disable"}
                    size={"sm"}
                    onClick={redirectLogin}
                  >
                    Comentar
                  </Button>
                )}
              </Show>
            </Flex>
            <Hide above="sm">
              {!!auth ? (
                <Button variant={"brand1"} size={"sm"} onClick={handleComment}>
                  Comentar
                </Button>
              ) : (
                <Button variant={"disable"} size={"sm"} onClick={redirectLogin}>
                  Comentar
                </Button>
              )}
            </Hide>
            {/* Rating Tags */}
            <Flex
              direction={"row"}
              alignItems={"center"}
              gap={"8px"}
              wrap={"wrap"}
              // maxWidth={{ base: "297px", lg: "441px" }}
            >
              <Button
                bg={"greyScale.grey7"}
                borderRadius={"24px"}
                px={"12px"}
                fontSize={"12px"}
                fontWeight={"500"}
                lineHeight={"24px"}
                color={"greyScale.grey3"}
                flexGrow={0}
                order={0}
              >
                Gostei Muito!
              </Button>
              <Button
                bg={"greyScale.grey7"}
                borderRadius={"24px"}
                px={"12px"}
                fontSize={"12px"}
                fontWeight={"500"}
                lineHeight={"24px"}
                color={"greyScale.grey3"}
                flexGrow={0}
                order={1}
              >
                Incrível
              </Button>
              <Button
                bg={"greyScale.grey7"}
                borderRadius={"24px"}
                px={"12px"}
                fontSize={"12px"}
                fontWeight={"500"}
                lineHeight={"24px"}
                color={"greyScale.grey3"}
                flexGrow={0}
                order={2}
              >
                Recomendarei para meus amigos!
              </Button>
            </Flex>
          </Flex>
        </Flex>
        {/* Right Column */}
        {/* Desktop Gallery */}
        <Show above="lg">
          <Flex direction={"column"} gap={"34px"} maxWidth={"441px"}>
            <Gallery images={images} user={user} />
          </Flex>
        </Show>
      </Flex>
    </Container>
  );
};

export default ProductPage;
