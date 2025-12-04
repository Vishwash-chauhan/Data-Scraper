import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import API from "../axios";

export default function ProtectedAdminRoute({ children }) {
  const navigate = useNavigate();
  const { getToken } = useAuth();
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const token = await getToken();
        const res = await API.get("/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (res.data.type === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          navigate("/");
        }
      } catch (err) {
        console.error(err);
        setIsAdmin(false);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [navigate, getToken]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg text-slate-500">Loading...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Access Denied</h1>
          <p className="text-slate-600 mb-6">You do not have permission to access this page.</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return <>{React.cloneElement(children, { token: getToken })}</>;
}
