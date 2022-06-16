import React from "react";
import { Button, InputBase } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Icons } from "../../components/Icons";
import Controls from "../../components/Controls/Controls";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Vui lòng nhập username")
    .max(10, "username tối đa 50 ký tự"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .max(20, "mật khẩu tối đa 20 ký tự"),
});

const FormInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onLoginSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      className="flex flex-col w-full justify-between"
      onSubmit={handleSubmit(onLoginSubmit)}
    >
      <div>
        <Icons.Lock />
        <InputBase
          {...register("username")}
          placeholder="Enter your user name"
          variant="contained"
          className="mt-2"
        />
        {errors.username && <p className="error">{errors.username?.message}</p>}
      </div>
      <div>
        <Icons.Mail />
        <InputBase
          {...register("password")}
          placeholder="Enter your user password"
          variant="contained"
          className="mt-2"
        />
        {errors.username && <p className="error">{errors.username?.message}</p>}
      </div>
      <Controls.Button variant="contained" className="mt-4" text="Sign In" />
    </form>
  );
};

export default FormInput;
