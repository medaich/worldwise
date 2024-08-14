import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  useEffect(
    function () {
      if (!user && !isLoading) {
        navigate("/");
      }
    },
    [user, navigate, isLoading]
  );

  if (user) return <>{children}</>;
}

export default ProtectedRoute;
