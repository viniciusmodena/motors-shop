import { Box, Flex, Heading } from "@chakra-ui/react";
import { ProductAuctionCard, ProductCard } from "../Card";

export const AdvertiseList = ({ products, type }: any) => {
  return type === "auction" ? (
    <Box
      id="auction"
      margin={["16px 12px 16px", "32px 32px 32px", "80px 48px 128px"]}
    >
      <Heading variant="h5" margin={["32px 0", "32px 0", "48px 0"]}>
        Leilão
      </Heading>
      <Flex gridGap={["12px", "12px", "24px"]} overflowX="auto">
        {products?.map((product: any) => {
          return <ProductAuctionCard key={product.id} product={product} />;
        })}
      </Flex>
    </Box>
  ) : (
    <Box
      id={type}
      margin={["16px 12px 16px", "32px 32px 32px", "80px 48px 128px"]}
    >
      <Heading variant="h5" margin={["32px 0", "32px 0", "48px 0"]}>
        {type === "bikes" ? "Motos" : "Carros"}
      </Heading>
      <Flex gridGap={["12px", "12px", "32px"]} overflowX="auto">
        {products?.map((product: any) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Flex>
    </Box>
  );
};
