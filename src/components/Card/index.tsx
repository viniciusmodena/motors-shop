import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

export const ProductCard = ({ product }: any) => {
  const randomNumber = Math.floor(Math.random() * 12) + 1;
  const [randomColor, setRandomColor] = useState(
    "randomColorsProfile.random" + randomNumber.toString()
  );

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      h="350px"
      w="312px"
    >
      <Flex
        justifyContent="center"
        flexDirection="row"
        bgColor="greyScale.grey7"
        border="2px solid #E9ECEF"
        position="relative"
        _hover={{
          border: "2px solid #4529E6",
          cursor: "pointer",
        }}
      >
        {product.is_active ? (
          <Flex
            bgColor="brand.brand1"
            h="24px"
            padding="0 8px"
            color="greyScale.whiteFixed"
            position="absolute"
            top="11px"
            left="16px"
          >
            Ativo
          </Flex>
        ) : (
          <Flex
            bgColor="greyScale.grey4"
            h="24px"
            padding="0 8px"
            color="greyScale.whiteFixed"
            position="absolute"
            top="11px"
            left="16px"
          >
            Inativo
          </Flex>
        )}
        <Image
          src={product.img_url}
          alt={product.title}
          objectFit="cover"
          w="262px"
          h="150px"
          border="none"
        />
      </Flex>
      <Heading
        variant={"h7"}
        margin="8px 0"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {product.title}
      </Heading>
      <Text
        sx={{
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "2",
          display: "-webkit-box",
        }}
        display="block"
        lineHeight="1.5em"
        height="3em"
        fontSize="xs"
        fontWeight="400"
        color="greyScale.grey2"
        overflow="hidden"
        margin="8px 0"
      >
        {product.desc}
      </Text>
      <Flex>
        <Flex
          w="32px"
          h="32px"
          paddingLeft="1px"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          bgColor={randomColor}
          color="greyScale.whiteFixed"
          marginRight="10px"
        >
          {product.user.name[0].toUpperCase()}
        </Flex>
        <Flex
          fontSize="xs"
          color="greyScale.grey2"
          fontWeight="500"
          alignItems="center"
        >
          {product.user.name}
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" margin="8px 0">
        <Flex>
          <Text
            padding="4px 8px"
            marginRight="5px"
            bgColor="brand.brand4"
            color="brand.brand1"
            fontWeight="500"
            gap="10px"
          >
            {product.km + " KM"}
          </Text>
          <Text
            padding="4px 8px"
            bgColor="brand.brand4"
            color="brand.brand1"
            fontWeight="500"
            gap="10px"
          >
            {product.year}
          </Text>
        </Flex>
        <Heading
          fontSize="sm"
          padding="4px 8px"
          variant={"h7_500"}
          color="greyScale.grey1"
        >
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </Heading>
      </Flex>
    </Flex>
  );
};


export const ProductAuctionCard = ({ product }: any) => {
  const randomNumber = Math.floor(Math.random() * 12) + 1;
  const [randomColor, setRandomColor] = useState(
    "randomColorsProfile.random" + randomNumber.toString()
  );
  return (
    <Flex
      role="group"
      flexDirection="column"
      w="735px"
      h="388px"
      boxSizing="border-box"
      borderRadius={"4px"}
      position="relative"
    >
      <Flex
        justifyContent="center"
        w={["328px", "328px", "735px"]}
        h="326px"
        position="relative"
        bgImg={product.img_url}
        bgRepeat="no-repeat"
        bgSize={["contain", "contain", "fill"]}
        bgPosition="center"
        borderRadius={"4px 4px 0px 0px"}
      ></Flex>

      <Flex
        justifyContent="center"
        w={["328px", "328px", "735px"]}
        h="326px"
        position="absolute"
        bg="linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%)"
        borderRadius={"4px 4px 0px 0px"}
        _groupHover={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.71) 0%, #000000 100%)",
          cursor: "pointer",
        }}
      >
        <Flex w={["328px", "328px", "735px"]} />

        <Flex
          justifyContent="space-evenly"
          alignItems="center"
          w="123px"
          h="36px"
          bgColor="greyScale.whiteFixed"
          fontSize="xs"
          fontWeight="600"
          borderRadius="32px"
          position="absolute"
          left={["22px", "36px"]}
          top="24px"
        >
          <Image src="src\assets\time.svg" />
          01:18:00
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          position="absolute"
          bottom="30px"
          w={["80%", "80%", "90%"]}
          h={["60%", "60%", "55%"]}
        >
          <Heading
            variant="h6"
            color="greyScale.grey10"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {product.title}
          </Heading>
          <Text
            color="greyScale.grey5"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {product.desc}
          </Text>
          <Flex>
            <Flex
              w="32px"
              h="32px"
              justifyContent="center"
              alignItems="center"
              borderRadius="50%"
              bgColor={randomColor}
              color="greyScale.whiteFixed"
              marginRight="10px"
              paddingLeft="3px"
            >
              {product.user.name[0].toUpperCase()}
            </Flex>
            <Flex
              fontSize="xs"
              color="greyScale.whiteFixed"
              fontWeight="500"
              alignItems="center"
            >
              {product.user.name}
            </Flex>
          </Flex>
          <Flex
            justifyContent="space-between"
            flexDirection={["column", "column", "row"]}
            margin={["0", "0", "8px 0"]}
          >
            <Flex>
              <Text
                padding="4px 8px"
                marginRight="10px"
                bgColor="brand.brand4"
                color="brand.brand1"
                fontWeight="500"
                borderRadius="4px"
                gap="10px"
              >
                {product.year}
              </Text>
              <Text
                padding="4px 8px"
                bgColor="brand.brand4"
                color="brand.brand1"
                borderRadius="4px"
                fontWeight="500"
                gap="10px"
              >
                {product.km + " KM"}
              </Text>
            </Flex>
            <Heading
              fontSize="sm"
              padding={["4px 0px", "4px 0px", "4px 8px"]}
              marginTop={["8px", "8px", "0"]}
              variant={"h7_500"}
              color="greyScale.whiteFixed"
              alignSelf={["flex_start", "flex_start", "center"]}
            >
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </Heading>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        _groupHover={{ backgroundColor: "brand.brand2" }}
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="60px"
        bgColor="brand.brand1"
        borderRadius={"0px 0px 4px 4px"}
      >
        <Flex justifyContent="space-between" w="90%">
          <Text fontSize="sm" fontWeight="600" color="greyScale.whiteFixed">
            Acessar pagina do Leilão
          </Text>
          <Text as="a" color="greyScale.whiteFixed">
            --&gt;
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
