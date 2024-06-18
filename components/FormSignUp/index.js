import { useState } from "react";
import Button from "../Button";
import TextInput from "../TextInput";
import { useRouter } from "next/router";
import { postData, putData } from "../../utils/fetchData";
import { toast } from "react-toastify";

export default function FormSignUp() {
  const router = useRouter();
  const { keyword } = router.query;
  const [otp, setOtp] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (keyword === "otp") {
        const res = await putData("api/v1/active", {
          otp: otp,
          email: form.email,
        });
        if (res.data) {
          toast.success("Berhasil mengaktifkan akun", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          router.push("/signin");
        }
      } else {
        const res = await postData("api/v1/auth/signup", form);
        if (res.data) {
          toast.success("Silakan Check Email Anda", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          router.push({ pathname: "/signup", query: { keyword: "otp" } });
        }
      }
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Error during form submission", error);
    }
  };

  return (
    <form className="form-login d-flex flex-column mt-4 mt-md-0">
      {keyword === "otp" ? (
        <TextInput
          label="OTP"
          type="text"
          value={otp}
          name="otp"
          placeholder="Enter OTP here"
          onChange={(e) => setOtp(e.target.value)}
        />
      ) : (
        <>
          <TextInput
            label="First Name"
            type="text"
            value={form.firstName}
            name="firstName"
            placeholder="First name here"
            onChange={handleChange}
          />
          <TextInput
            label="Last Name"
            type="text"
            name="lastName"
            value={form.lastName}
            placeholder="Last name here"
            onChange={handleChange}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            value={form.email}
            placeholder="example@gmail.com"
            onChange={handleChange}
          />
          <TextInput
            label="Password"
            type="password"
            value={form.password}
            name="password"
            placeholder="Type your password"
            onChange={handleChange}
          />
          <TextInput
            label="Role"
            type="text"
            value={form.role}
            name="role"
            placeholder="ex: Seniman"
            onChange={handleChange}
          />
        </>
      )}
      <div className="d-grid mt-2">
        <Button variant="btn-green" action={handleSubmit}>
          {keyword === "otp" ? "Verification" : "Sign Up"}
        </Button>
      </div>
    </form>
  );
}
