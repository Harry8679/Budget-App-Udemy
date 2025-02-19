import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      navigate("/");
    } catch (err) {
      alert("Identifiants incorrects !");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <input placeholder="Mot de passe" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default Login;