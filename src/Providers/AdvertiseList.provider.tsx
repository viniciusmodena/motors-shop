import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AdvertiseListContext = createContext([]);

export const AdvertiseListProvider = ({ children }: any) => {
  const [advertises, setAdvertises] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/products")
        .then((res) => {
          setAdvertises(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData()
  }, []);

  return (
    <AdvertiseListContext.Provider value={advertises}>
      {children}
    </AdvertiseListContext.Provider>
  );
};
