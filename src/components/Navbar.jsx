import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold flex items-center">
        Gestionnaire de Budget <span className="ml-2">💰</span>
      </Link>

      {/* Espace utilisateur */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <div className="flex items-center gap-2">
              <span className="text-lg">👤</span>
              <span className="font-semibold">{user.username}</span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Déconnexion
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
            Connexion
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;