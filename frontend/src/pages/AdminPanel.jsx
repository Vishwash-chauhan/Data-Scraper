import React, { useEffect, useState } from "react";
import API from "../axios";

const PLAN_OPTIONS = ["No Plan", "Silver", "Gold", "Platinum"];

export default function AdminPanel({ token: getToken }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [editingValue, setEditingValue] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = await getToken();
      const res = await API.get("/api/users", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handlePlanChange = async (userId, newPlan) => {
    try {
      setUpdating(true);
      const token = await getToken();
      const res = await API.put(`/api/users/${userId}`, { plan: newPlan }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(users.map(u => u._id === userId ? res.data.user : u));
      setEditingId(null);
      setEditingField(null);
      setEditingValue("");
    } catch (err) {
      console.error(err);
      alert("Failed to update plan");
    } finally {
      setUpdating(false);
    }
  };

  const handleSearchesChange = async (userId, newSearches) => {
    try {
      setUpdating(true);
      const token = await getToken();
      const res = await API.put(`/api/users/${userId}/searches`, { noOfSearches: parseInt(newSearches) }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(users.map(u => u._id === userId ? res.data.user : u));
      setEditingId(null);
      setEditingField(null);
      setEditingValue("");
    } catch (err) {
      console.error(err);
      alert("Failed to update searches");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-4 font-inter">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center">Admin Panel</h1>
        {loading ? (
          <div className="text-center text-lg text-slate-500">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-slate-200">
            <table className="min-w-full table-auto">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-600">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-600">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-600">Plan</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-600">No. of Searches</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-600">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-600">Clerk ID</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-600">Image</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-slate-600">Created At</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="px-4 py-3 text-sm font-semibold">{user.name}</td>
                    <td className="px-4 py-3 text-sm">{user.email}</td>
                    <td className="px-4 py-3 text-sm">
                      {editingId === user._id ? (
                        <div className="flex gap-2">
                          <select
                            value={editingValue}
                            onChange={(e) => setEditingValue(e.target.value)}
                            className="border border-slate-300 rounded px-2 py-1 text-sm"
                          >
                            <option value="">Select Plan</option>
                            {PLAN_OPTIONS.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                          <button
                            onClick={() => handlePlanChange(user._id, editingValue)}
                            disabled={updating}
                            className="bg-indigo-500 text-white px-2 py-1 rounded text-xs font-semibold hover:bg-indigo-600 disabled:bg-slate-400"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="bg-slate-300 text-slate-700 px-2 py-1 rounded text-xs font-semibold hover:bg-slate-400"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            setEditingId(user._id);
                            setEditingField("plan");
                            setEditingValue(user.plan);
                          }}
                          className="cursor-pointer hover:text-indigo-600 hover:underline"
                        >
                          {user.plan}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {editingId === user._id && editingField === "searches" ? (
                        <div className="flex gap-2">
                          <input
                            type="number"
                            min="0"
                            value={editingValue}
                            onChange={(e) => setEditingValue(e.target.value)}
                            className="border border-slate-300 rounded px-2 py-1 text-sm w-16"
                          />
                          <button
                            onClick={() => handleSearchesChange(user._id, editingValue)}
                            disabled={updating}
                            className="bg-indigo-500 text-white px-2 py-1 rounded text-xs font-semibold hover:bg-indigo-600 disabled:bg-slate-400"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="bg-slate-300 text-slate-700 px-2 py-1 rounded text-xs font-semibold hover:bg-slate-400"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            setEditingId(user._id);
                            setEditingField("searches");
                            setEditingValue(user.noOfSearches);
                          }}
                          className="cursor-pointer hover:text-indigo-600 hover:underline"
                        >
                          {user.noOfSearches}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm">{user.type}</td>
                    <td className="px-4 py-3 text-xs">{user.clerkId}</td>
                    <td className="px-4 py-3 text-sm">
                      {user.imageUrl ? (
                        <img src={user.imageUrl} alt="User" className="h-8 w-8 rounded-full object-cover" />
                      ) : (
                        <span className="text-slate-400">N/A</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs">{new Date(user.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
