import axios from "axios";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/save",
        data
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(watch("id")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input
        type="number"
        defaultValue="id"
        {...register("id", { required: true })}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        defaultValue="gender"
        {...register("gender", { required: true })}
      />
      <input
        defaultValue="name"
        {...register("name", { required: true })}
      ></input>
      <input
        defaultValue="contact"
        {...register("contact", { required: true })}
      ></input>
      <input
        defaultValue="address"
        {...register("address", { required: true })}
      ></input>
      <input
        defaultValue="photo-url"
        {...register("photoUrl", { required: true })}
      ></input>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
