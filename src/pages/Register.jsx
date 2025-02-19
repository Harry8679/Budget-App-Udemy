import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("Inscription réussie ! Connectez-vous maintenant.");
      navigate("/login");
    } catch (err) {
      alert("Erreur lors de l'inscription.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nom" onChange={(e) => setForm({ ...form, username: e.target.value })} required />
      <input placeholder="Email" type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      <input placeholder="Mot de passe" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} required />
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Register;