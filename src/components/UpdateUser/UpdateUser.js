import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.patch(
        `http://localhost:5000/user/update/${id}`,
        data
      );
    } catch (error) {
      console.log(error);
    }
  };
  console.log(watch("id"));
  console.log(watch("name"));
  console.log(watch("gender"));
  const fetchData = async () => {
    await axios
      .get(`http://localhost:5000/user/random/${id}`)
      .then((data) => setUser(data.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setValue("id", user?.id);
    setValue("gender", user?.gender);
    setValue("name", user?.name);
    setValue("contact", user?.contact);
    setValue("address", user?.address);
    setValue("photoUrl", user?.photoUrl);
  }, [user]);
  console.log(user);
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input type="number" readOnly {...register("id", { required: true })} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("gender", { required: true })} />
      <input {...register("name", { required: true })}></input>
      <input {...register("contact", { required: true })}></input>
      <input {...register("address", { required: true })}></input>
      <input {...register("photoUrl", { required: true })}></input>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default UpdateUser;
