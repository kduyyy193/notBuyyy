import React from "react";
import { Box } from "@mui/system";
import Icons from "../../components/Icons/index";
import Button from "../../components/Button/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { MdSupervisedUserCircle } from "react-icons/md";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email không hợp lệ!")
      .required("Vui lòng nhập email!"),
    username: yup.string().required("Vui lòng nhập user name"),
    password: yup
      .string()
      .required("Vui lòng nhập mật khẩu!")
      .min(8, "mật khẩu tối đa 8 ký tự"),
  })
  .required();

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onChange" });
  const register1 = { ...register("email") };

  const onLoginSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box className="flex flex-col items-center mt-8 mx-auto w-1/2 max-w-sm">
      <h3 className="font-extrabold text-3xl text-red-600 my-4">Regiser</h3>
      <span className="text-gray-500 font-semibold mb-2 ">
        Đăng kí để mua hàng!
      </span>
      <form className="w-full mt-8" onSubmit={handleSubmit(onLoginSubmit)}>
        <label>
          <div className="flex justify-start items-center rounded-xl mt-4 border-2 text-xs py-1 pl-2 hover:border-sky-400 focus-within:border-sky-400">
            <Icons.Mail />
            <input
              {...register("email")}
              name="email"
              id="email"
              placeholder="Enter your email address or your number"
              className=" outline-none w-full pl-2 "
            />
          </div>
          {errors.email && (
            <p className="error text-left text-xs mt-2 mb-4 text-red-600 ml-2">
              {errors.email?.message}
            </p>
          )}
        </label>
        <label>
          <div className="flex justify-start items-center rounded-xl mt-4 border-2 text-xs py-1 pl-2 hover:border-sky-400 focus-within:border-sky-400">
            <MdSupervisedUserCircle size={16} className="my-2  text-sky-400" />
            <input
              {...register("username")}
              name="username"
              id="username"
              placeholder="Enter your user name"
              className=" outline-none w-full pl-2 "
            />
          </div>
          {errors.username && (
            <p className="error text-left text-xs mt-2 mb-4 text-red-600 ml-2">
              {errors.username?.message}
            </p>
          )}
        </label>
        <label>
          <div className="flex justify-start items-center rounded-xl mt-4 border-2 text-xs py-1 pl-2 hover:border-sky-400 focus-within:border-sky-400">
            <Icons.Lock />
            <input
              {...register("password")}
              id="password"
              placeholder="Enter your pass word"
              className=" outline-none w-full pl-2 "
            />
          </div>{" "}
          {errors.password && (
            <p className="error text-left text-xs mt-2 mb-4 text-red-600 ml-2">
              {errors.password?.message}
            </p>
          )}
        </label>
        <Button
          variant="contained"
          className="py-3 text-xs w-full mt-4"
          text="Regiser"
        />
      </form>
    </Box>
  );
};

export default SignIn;
