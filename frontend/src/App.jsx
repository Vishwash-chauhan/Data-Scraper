import { useEffect } from 'react';
import { useAuth } from "@clerk/clerk-react";

import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
import Scraper from './pages/Scraper'
import Dashboard from './pages/Dashboard'
import Pricing from './pages/Pricing'
import AdminPanel from './pages/AdminPanel'
import Navbar from './components/Navbar'
import API from './axios';

const App = () => {
  const { user, isSignedIn } = useUser();

  const { getToken } = useAuth();

  useEffect(() => {
    const sync = async () => {
      if (isSignedIn && user) {
        const token = await getToken();   // 🔑 Get Clerk JWT Token

        await API.post(
          '/api/users',
          {
            clerkId: user.id,
            email: user.primaryEmailAddress?.emailAddress,
            name: user.fullName,
            imageUrl: user.imageUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`  // 🔥 Send token to backend
            }
          }
        );
      }
    };

    sync();
  }, [isSignedIn, user]);


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Scraper />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </div>
  )
}

export default App