import { AxiosResponse } from "axios";
import { createContext, useState, useContext, ReactNode } from "react";
import { api } from "../../services";

interface UserProviderProps {
  children: ReactNode;
}

export interface UserType {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone_number: string;
  description: string;
  birthdate: string;
  is_seller: boolean;
  is_superuser: boolean;
}

interface UserProviderData {
  user: UserType | null;
  setUser: (user: UserType) => void;
  userRegister: (data: RegisterUserType) => void;
  userLogin: (credentials: CredentialsType) => void;
  userAccountDetail: () => void;
  userAccountUpdate: (data: UpdateAccountType) => void;
  userDeleteAccount: () => void;
}

interface RegisterUserType {
  name: string;
  cpf: string;
  email: string;
  password: string;
  phone_number: string;
  description: string;
  birthdate: string;
  is_seller: boolean;
}

interface UpdateAccountType {
  name?: string;
  cpf?: string;
  email?: string;
  password?: string;
  phone_number?: string;
  description?: string;
}

interface CredentialsType {
  email: string;
  password: string;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType>({} as UserType);

  const userRegister = (data: RegisterUserType) => {
    api
      .post("/register", data)
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userLogin = (credentials: CredentialsType) => {
    api
      .post("/login", credentials)
      .then((res: AxiosResponse) => {
        console.log(res);
        localStorage.setItem(
          `@motors_shop:user`,
          JSON.stringify(res.data.user)
        );

        localStorage.setItem(
          `@motors_shop:token`,
          JSON.stringify(res.data.access_token)
        );

        // setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userAccountDetail = () => {
    api
      .get(`/users/${user!.id}`)
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userAccountUpdate = (data: UpdateAccountType) => {
    api
      .patch(`/users/${user!.id}`, data)
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userDeleteAccount = () => {
    api
      .delete(`/users/${user!.id}`)
      .then((res: AxiosResponse) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRegister,
        userLogin,
        userAccountDetail,
        userAccountUpdate,
        userDeleteAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
