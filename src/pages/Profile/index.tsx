import { Navigate, useParams } from "react-router-dom";
import { AdvertiseList } from "../../components/AdvertiseList";
import { UserProfileCard } from "../../components/UserProfileCard";
import { getProducts, users } from "../../data";

export const ProfilePage = () => {
  const params = useParams();
  const user_id = params.user_id;
  const user = users.find((user) => user.id === user_id);
  const products = getProducts();
  const cars = products.filter(
    (prod) => prod.is_car === true && prod.user.id === user_id
  );
  const bikes = products.filter((prod) => prod.is_car === false);

  if (user === undefined) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <UserProfileCard user={user} />
      <AdvertiseList products={cars} type="cars" />
      <AdvertiseList products={bikes} type="bikes" />
    </>
  );
};
