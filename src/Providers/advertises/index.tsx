import { AxiosResponse } from "axios";
import { createContext, useState, useContext, ReactNode } from "react";
import { api } from "../../services";
import { UserType } from "../users";

interface AdvertiseProviderProps {
  children: ReactNode;
}

interface VehicleType {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  km: number;
  type: string;
  description: string;
  is_available: boolean;
  cover_image_url: string;
  gallery_images: object[];
}

interface RegisterVehicleType {
  name: string;
  brand: string;
  year: number;
  price: number;
  km: number;
  type: string;
  description: string;
  cover_image_url: string;
  gallery_images: object[];
}

interface UpdateVehicleType {
  name?: string;
  brand?: string;
  year?: number;
  price?: number;
  km?: number;
  type?: string;
  description?: string;
  is_available?: boolean;
  cover_image_url?: string;
  gallery_images?: object[];
}

interface AdvertiseType {
  id: string;
  seller: UserType;
  vehicle: VehicleType;
  is_active: boolean;
  is_auction: boolean;
  created_at: string;
}

interface RegisterAdvertiseType {
  vehicle: RegisterVehicleType;
  is_active: boolean;
  is_auction: boolean;
}

interface UpdateAdvertiseType {
  vehicle?: UpdateVehicleType;
  is_active?: boolean;
  is_auction?: boolean;
}

interface AdvertiseProviderData {
  advertise: AdvertiseType | null;
  setAdvertise: (advertise: AdvertiseType) => void;
  usersCars: AdvertiseType[] | [];
  setUsersCars: (advertises: AdvertiseType[]) => void;
  usersBikes: AdvertiseType[] | [];
  setUsersBikes: (advertises: AdvertiseType[]) => void;
  carsAdvertises: AdvertiseType[] | [];
  setCarsAdvertises: (advertises: AdvertiseType[]) => void;
  bikesAdvertises: AdvertiseType[] | [];
  setBikesAdvertises: (advertises: AdvertiseType[]) => void;

  registerAdvertise: (data: RegisterAdvertiseType) => void;
  listUsersAdvertises: () => void;
  listAdvertises: () => void;
  retriveAdvertise: () => void;
  updateAdvertise: (data: UpdateAdvertiseType) => void;
  deleteAdvertise: () => void;
}

const AdvertiseContext = createContext<AdvertiseProviderData>(
  {} as AdvertiseProviderData
);

export const useAdvertise = () => useContext(AdvertiseContext);

export const AdvertiseProvider = ({ children }: AdvertiseProviderProps) => {
  const [advertise, setAdvertise] = useState<AdvertiseType | null>(null);

  const [usersCars, setUsersCars] = useState<AdvertiseType[]>([]);
  const [usersBikes, setUsersBikes] = useState<AdvertiseType[]>([]);
  // const [usersAuction, setUsersAuction] = useState<AdvertiseType[]>([]);

  const [carsAdvertises, setCarsAdvertises] = useState<AdvertiseType[]>([]);
  const [bikesAdvertises, setBikesAdvertises] = useState<AdvertiseType[]>([]);
  // const [auctionAdvertises, setAuctionAdvertises] = useState<AdvertiseType[]>([]);

  const registerAdvertise = (data: RegisterAdvertiseType) => {
    api
      .post("", data)
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listUsersAdvertises = () => {
    api
      .get("")
      .then((res: AxiosResponse) => {
        console.log(res);

        // const cars: AdvertiseType[] = [];
        // const bikes: AdvertiseType[] = [];

        // res.data.filter((ad: AdvertiseType) => {
        //   if (ad.vehicle.type.toLowerCase() === "car") {
        //     cars.push(ad);
        //   } else if (ad.vehicle.type.toLowerCase() === "bikes") {
        //     bikes.push(ad);
        //   }
        // });

        // setUsersCars(cars);
        // setUsersBikes(bikes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const listAdvertises = () => {
    api
      .get("")
      .then((res: AxiosResponse) => {
        console.log(res);

        // const cars: AdvertiseType[] = [];
        // const bikes: AdvertiseType[] = [];

        // res.data.filter((ad: AdvertiseType) => {
        //   if (ad.vehicle.type.toLowerCase() === "car") {
        //     cars.push(ad);
        //   } else if (ad.vehicle.type.toLowerCase() === "bikes") {
        //     bikes.push(ad);
        //   }
        // });

        // setUsersCars(cars);
        // setUsersBikes(bikes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const retriveAdvertise = () => {
    api
      .get("")
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateAdvertise = (data: UpdateAdvertiseType) => {
    api
      .patch("", data)
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAdvertise = () => {
    api
      .delete("")
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AdvertiseContext.Provider
      value={{
        advertise,
        setAdvertise,
        usersCars,
        setUsersCars,
        usersBikes,
        setUsersBikes,
        bikesAdvertises,
        setBikesAdvertises,
        carsAdvertises,
        setCarsAdvertises,
        registerAdvertise,
        listUsersAdvertises,
        listAdvertises,
        retriveAdvertise,
        updateAdvertise,
        deleteAdvertise,
      }}
    >
      {children}
    </AdvertiseContext.Provider>
  );
};
