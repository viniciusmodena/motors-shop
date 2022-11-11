import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
  Text,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack,
  Box,
  useRadio,
  useRadioGroup,
  Stack,
  Radio,
  RadioGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const AdvertiseModal = ({ isOpen, onOpen, onClose }: any) => {
  const [isAuction, setIsAuction] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [isSales, setIsSales] = useState(true);
  const [isCar, setIsCar] = useState(true);

  const [gallery, setGallery] = useState([{}]);

  const input_list = [{ type: "text", id: 0, value: "" }];
  const [fields, setFields] = useState(input_list);

  type AdvertiseRegister = {
    title: string;
    year: number;
    km: number;
    price: number;
    description: string;
    cover_img: string;
  };

  const addField = () => {
    setFields((s: any) => {
      const lastId = s[s.length - 1].id;
      return [...s, { type: "text", value: "", id: lastId }];
    });
  };

  const handleChange = (e: any) => {
    e.preventDefault();

    const index = e.target.id;
    setFields((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;
      newArr[index].id = e.target.id;

      const gal = newArr.map((item) => {
        return item.value;
      });
      setGallery(gal);
      return newArr;
    });
  };

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    year: yup.number().required("Campo obrigatório"),
    km: yup.number().required("Campo obrigatório"),
    price: yup.number().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    cover_img: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdvertiseRegister>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = (values: any) => {
    const obj = {
      ...values,
      type: isSales ? "sales" : "auction",
      vehicle_type: isCar ? "car" : "bike",
      gallery: gallery,
    };
    console.log(obj);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={false}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent color="greyScale.grey0">
        <ModalHeader>
          <Heading variant={"h7_500"}>Criar anúncio</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody color="greyScale.grey0">
          <form>
            {/* chamando radios */}
            <FormControl>
              <FormLabel>Tipo de anúncio</FormLabel>
              <HStack>
                <Button
                  onFocus={() => setIsSales(false)}
                  w="100%"
                  size="lg"
                  bg={"greyScale.grey10"}
                  border="1.5px solid #ADB5BD"
                  color="#0B0D0D"
                  fontWeight="600"
                  _focus={{
                    bg: "#4529E6",
                    color: "#ffffff",
                    borderColor: "#4529E6",
                  }}
                >
                  Venda
                </Button>
                <Button
                  onFocus={() => setIsSales(true)}
                  w="100%"
                  size="lg"
                  bg={"greyScale.grey10"}
                  border="1.5px solid #ADB5BD"
                  color="#0B0D0D"
                  fontWeight="600"
                  _focus={{
                    bg: "#4529E6",
                    color: "#ffffff",
                    borderColor: "#4529E6",
                  }}
                >
                  Leilão
                </Button>
              </HStack>
            </FormControl>

            <Text
              variant={"body-2-500"}
              color="greyScale.grey0"
              marginTop="1rem"
            >
              Informações do veículo
            </Text>
            <FormControl isRequired isInvalid={!!errors?.title?.message}>
              <FormLabel>Título</FormLabel>
              <Input size="lg" fontSize="sm" {...register("title")} />
              <FormErrorMessage fontSize={"12px"}>
                {errors?.title?.message}
              </FormErrorMessage>
            </FormControl>

            <Flex columnGap={"10px"}>
              <Flex flexDirection={"column"}>
                <FormControl isRequired isInvalid={!!errors?.year?.message}>
                  <FormLabel>Ano</FormLabel>
                  <Input size="lg" fontSize="sm" {...register("year")} />
                  <FormErrorMessage fontSize={"12px"}>
                    {errors?.year?.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>

              <Flex flexDirection={"column"}>
                <FormControl isRequired isInvalid={!!errors?.km?.message}>
                  <FormLabel>Quilometragem</FormLabel>
                  <Input size="lg" fontSize="sm" {...register("km")} />
                  <FormErrorMessage fontSize={"12px"}>
                    {errors?.km?.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>

              <FormControl isRequired isInvalid={!!errors?.price?.message}>
                <Flex flexDirection={"column"}>
                  {!isAuction ? (
                    <FormLabel>Preço</FormLabel>
                  ) : (
                    <FormLabel>Lance Inicial</FormLabel>
                  )}
                  <Input size="lg" fontSize="sm" {...register("price")} />
                  <FormErrorMessage fontSize={"12px"}>
                    {errors?.price?.message}
                  </FormErrorMessage>
                </Flex>
              </FormControl>
            </Flex>

            <FormControl isRequired isInvalid={!!errors?.description?.message}>
              <FormLabel>Descrição</FormLabel>
              <Textarea fontSize="sm" {...register("description")} />
              <FormErrorMessage fontSize={"12px"}>
                {errors?.description?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel>Tipo de veículo</FormLabel>
              <HStack>
                <Button
                  onFocus={() => setIsCar(true)}
                  w="100%"
                  size="lg"
                  bg={"greyScale.grey10"}
                  border="1.5px solid #ADB5BD"
                  color="#0B0D0D"
                  fontWeight="600"
                  _focus={{
                    bg: "#4529E6",
                    color: "#ffffff",
                    borderColor: "#4529E6",
                  }}
                >
                  Carro
                </Button>
                <Button
                  onFocus={() => setIsCar(false)}
                  w="100%"
                  size="lg"
                  bg={"greyScale.grey10"}
                  border="1.5px solid #ADB5BD"
                  color="#0B0D0D"
                  fontWeight="600"
                  _focus={{
                    bg: "#4529E6",
                    color: "#ffffff",
                    borderColor: "#4529E6",
                  }}
                >
                  Moto
                </Button>
              </HStack>
            </FormControl>

            <FormControl isRequired isInvalid={!!errors?.cover_img?.message}>
              <FormLabel>Imagem da capa</FormLabel>
              <Input size="lg" fontSize="sm" {...register("cover_img")} />
              <FormErrorMessage fontSize={"12px"}>
                {errors?.cover_img?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isRequired>
              {fields.map((item, index) => {
                return (
                  <>
                    <FormLabel>{index + 1}° imagem da galeria</FormLabel>

                    <Input
                      marginTop="rem"
                      size="lg"
                      fontSize="sm"
                      onChange={handleChange}
                      value={item.value}
                      id={index.toString()}
                      type={item.type}
                    />
                  </>
                );
              })}
            </FormControl>

            <Button
              onClick={() => addField()}
              margin="1rem 0"
              size="sm"
              bg="brand.brand4"
              color="brand.brand1"
            >
              Adicionar campo para imagem da galeria
            </Button>

            <ModalFooter columnGap="10px">
              <Button size="lg" fontSize="xs">
                Cancelar
              </Button>
              <Button
                onClick={handleSubmit(onSubmit)}
                size="lg"
                fontSize="xs"
                bg="brand.brand1"
                color="greyScale.whiteFixed"
                _disabled={{
                  bg: "#B0A6F0",
                }}
                _hover={{}}
                disabled={
                  !!errors.title ||
                  !!errors.description ||
                  !!errors.price ||
                  !!errors.year ||
                  !!errors.km ||
                  !!errors.price ||
                  !!errors.cover_img
                }
              >
                Criar anúncio
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const RadioCard = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" w="100%">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="4px"
        border="1.5px solid #ADB5BD"
        color="#0B0D0D"
        fontWeight="600"
        _checked={{
          bg: "#4529E6",
          color: "#ffffff",
          borderColor: "#4529E6",
        }}
        py={"10px"}
        px={"28px"}
        textAlign="center"
      >
        {props.children}
      </Box>
    </Box>
  );
};
