export const products = [
  {
    id: 1,
    title: "Product Title",
    img_url:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam saepe temporibus nesciunt corrupti expedita, eveniet sequi quasi amet cupiditate maiores soluta praesentium veritatis alias tempore fuga minima asperiores pariatur",
    km: 0,
    year: 2022,
    is_car: true,
    is_active: false,
    price: 100000,
    user: {
      name: "User Name",
      id: "1"
    },
  },
  {
    id: 2,
    title: "Product Title",
    img_url:
      "https://img.freepik.com/psd-gratuitas/carro-esporte-branco_176382-1598.jpg?w=2000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam saepe temporibus nesciunt corrupti expedita, eveniet sequi quasi amet cupiditate maiores soluta praesentium veritatis alias tempore fuga minima asperiores pariatur",
    km: 10,
    year: 2012,
    is_car: false,
    is_active: false,
    price: 1000,
    user: {
      name: "User Name",
      id: "1"
    },
  },
  {
    id: 3,
    title: "Product Title",
    img_url:
      "https://img2.gratispng.com/20180628/zcr/kisspng-honda-cg125-motorcycle-honda-cg-150-honda-xre300-honda-cg-5b35acf1472d72.6407301415302443372916.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam saepe temporibus nesciunt corrupti expedita, eveniet sequi quasi amet cupiditate maiores soluta praesentium veritatis alias tempore fuga minima asperiores pariatur",
    km: 0,
    year: 2022,
    is_car: false,
    is_active: true,
    price: 100000,
    user: {
      name: "User Name",
      id: "2"
    },
  },
  {
    id: 4,
    title: "Product Title",
    img_url:
      "https://img.freepik.com/psd-gratuitas/carro-esporte-branco_176382-1598.jpg?w=2000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam saepe temporibus nesciunt corrupti expedita, eveniet sequi quasi amet cupiditate maiores soluta praesentium veritatis alias tempore fuga minima asperiores pariatur",
    km: 10,
    year: 2012,
    is_car: true,
    is_active: true,
    price: 1000,
    user: {
      name: "User Name",
      id: "1"
    },
  },
  {
    id: 5,
    title: "Product Title",
    img_url:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam saepe temporibus nesciunt corrupti expedita, eveniet sequi quasi amet cupiditate maiores soluta praesentium veritatis alias tempore fuga minima asperiores pariatur",
    km: 0,
    year: 2022,
    is_car: true,
    is_active: true,
    price: 100000,
    user: {
      name: "User Name",
      id: "1"
    },
  },
  {
    id: 6,
    title: "Product Title",
    img_url:
      "https://img.freepik.com/psd-gratuitas/carro-esporte-branco_176382-1598.jpg?w=2000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam saepe temporibus nesciunt corrupti expedita, eveniet sequi quasi amet cupiditate maiores soluta praesentium veritatis alias tempore fuga minima asperiores pariatur",
    km: 10,
    year: 2012,
    is_car: true,
    is_active: true,
    price: 1000,
    user: {
      name: "User Name",
      id: "2"
    },
  },
  {
    id: 7,
    title: "Product Title",
    img_url:
      "https://img2.gratispng.com/20180628/zcr/kisspng-honda-cg125-motorcycle-honda-cg-150-honda-xre300-honda-cg-5b35acf1472d72.6407301415302443372916.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam saepe temporibus nesciunt corrupti expedita, eveniet sequi quasi amet cupiditate maiores soluta praesentium veritatis alias tempore fuga minima asperiores pariatur",
    km: 0,
    year: 2022,
    is_car: false,
    is_active: true,
    price: 100000,
    user: {
      name: "User Name",
      id: "1"
    },
  },
  {
    id: 8,
    title: "Product Title",
    img_url:
      "https://img.freepik.com/psd-gratuitas/carro-esporte-branco_176382-1598.jpg?w=2000",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magnam saepe temporibus nesciunt corrupti expedita, eveniet sequi quasi amet cupiditate maiores soluta praesentium veritatis alias tempore fuga minima asperiores pariatur",
    km: 10,
    year: 2012,
    is_car: true,
    is_active: true,
    price: 1000,
    user: {
      name: "User Name",
      id: 1
    },
  },
];

export const getProducts = () => {
  return products;
};

export const getProduct = (id: any) => {
  return products.filter((product) => product.id === id);
};

export const users = [
  {
    id: "1",
    name: "User User",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dignissimos commodi vitae accusamus velit a quisquam tenetur fugit, et blanditiis assumenda minus accusantium? , et blanditiis assumenda minus accusantium?",
    is_seller: true,
    image:
      "https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU=",
  },
  {
    id: "2",
    name: "User2 User",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dignissimos commodi vitae accusamus velit a quisquam tenetur fugit, et blanditiis assumenda minus accusantium? , et blanditiis assumenda minus accusantium?",
    is_seller: false,
    image:
      "https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
  },
  {
    id: "3",
    name: "User3 User",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dignissimos commodi vitae accusamus velit a quisquam tenetur fugit, et blanditiis assumenda minus accusantium? , et blanditiis assumenda minus accusantium?",
    is_seller: true,
    image:
      "https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
  },
];

export const getUser = (id: any) => {
  const user = users.find((user) => {
    user.id === id;
  });
  console.log(user);
  return user;
};

export const authUser = {
  id: "1",
  name: "User3 User",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dignissimos commodi vitae accusamus velit a quisquam tenetur fugit, et blanditiis assumenda minus accusantium? , et blanditiis assumenda minus accusantium?",
  is_seller: true,
  image:
    "https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg",
}